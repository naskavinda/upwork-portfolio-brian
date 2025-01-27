import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
  InputAdornment,
  Slide,
  Fade,
  CircularProgress
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import emailjs from '@emailjs/browser';
import avatar from '../assets/images/avatar.jpg';
import '../assets/styles/Main.scss';
import { emailConfig } from '../config/email';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface MainProps {
  mode: string;
}

function Main({ mode }: MainProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleConnect = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        emailConfig.publicKey
      );
      
      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });
      handleClose();
    } catch (error) {
      console.error('Email error:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="inner-container">
          <div className="image-wrapper">
            <img src={avatar} alt="Avatar" />
          </div>
          <div className="content">
            <div className="social_icons">
              <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
            <h1>Brian Bui</h1>
            <p>Computer Engineer</p>
            <button className="connect-button" onClick={handleConnect}>
              <EmailIcon /> Let's Connect
            </button>

            <div className="mobile_social_icons">
              <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
          </div>
        </div>
      </div>

      <Dialog 
        open={open} 
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        className={`contact-dialog ${mode === 'dark' ? 'dark-mode' : ''}`}
        TransitionComponent={Slide}
        TransitionProps={{ direction: "up" } as TransitionProps}
        PaperProps={{
          elevation: 0,
          className: "dialog-paper"
        }}
      >
        <DialogTitle className="dialog-title">
          <div className="title-content">
            <EmailIcon className="title-icon" />
            <span>Let's Connect</span>
          </div>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className="close-button"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className="dialog-content">
          <div className="form-description">
            I'd love to hear from you! Send me a message and I'll get back to you as soon as possible.
          </div>
          <Fade in={true} timeout={800}>
            <div>
              <TextField
                autoFocus
                margin="dense"
                name="name"
                label="Name"
                type="text"
                fullWidth
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                className="dialog-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon className="input-icon" />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </Fade>
          <Fade in={true} timeout={1000}>
            <div>
              <TextField
                margin="dense"
                name="email"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                className="dialog-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailIcon className="input-icon" />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </Fade>
          <Fade in={true} timeout={1200}>
            <div>
              <TextField
                margin="dense"
                name="message"
                label="Message"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                className="dialog-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MessageOutlinedIcon className="input-icon" />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </Fade>
        </DialogContent>
        <DialogActions className="dialog-actions">
          <Button 
            className="submit-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <>
                <CircularProgress size={20} color="inherit" />
                <span style={{ marginLeft: '8px' }}>Sending...</span>
              </>
            ) : (
              <>
                <SendIcon />
                <span style={{ marginLeft: '8px' }}>Send Message</span>
              </>
            )}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Main;