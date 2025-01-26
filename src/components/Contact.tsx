import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import { CircularProgress, Snackbar, Alert } from '@mui/material';
import { emailConfig } from '../config/email';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const validateForm = () => {
    const newNameError = name === '';
    const newEmailError = email === '' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    const newMessageError = message === '';

    setNameError(newNameError);
    setEmailError(newEmailError);
    setMessageError(newMessageError);

    return !newNameError && !newEmailError && !newMessageError;
  };

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        emailConfig.publicKey
      );

      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });

      // Clear form
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset errors
      setNameError(false);
      setEmailError(false);
      setMessageError(false);
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

  return (
    <div id="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Brian Bui</h2>
          <p className="description">
            A passionate full stack developer creating robust and scalable
            solutions.
          </p>

          <div className="social-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href="#resume" target="_blank" rel="noopener noreferrer">
              <ArticleIcon />
            </a>
          </div>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#qualifications">Qualifications</a></li>
          </ul>
        </div>

        <div className="contact-details">
          <h3>Contact Details</h3>
          <ul>
            <li>
              <strong>Email:</strong>
              <a href="mailto:brian.bui@example.com">brian.bui@example.com</a>
            </li>
            <li>
              <strong>Phone:</strong>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li>
              <strong>Location:</strong>
              <span>San Francisco, CA</span>
            </li>
          </ul>
        </div>

        <div className="contact-form">
          <h3>Get in Touch</h3>
          <Box
            component="form"
            onSubmit={sendEmail}
            sx={{
              '& .MuiTextField-root': { mb: 2 },
            }}
          >
            <div className="form-row">
              <TextField
                className="form-field"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Name is required' : ''}
              />
              <TextField
                className="form-field"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Valid email is required' : ''}
              />
            </div>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Message is required' : ''}
            />
            <Button
              type="submit"
              className="connect-button"
              disabled={loading}
              endIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
            >
              Send Message
            </Button>
          </Box>
        </div>
      </div>

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

export default Contact;