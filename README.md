# Developer Portfolio Template 🚀

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## What is this?

This portfolio template is designed to showcase your past projects, career history, skill sets, and more.

## Quick Setup

1. Ensure you have [Node.js](https://nodejs.org/) installed. Check your installation by running:

    ```bash
    node -v
    ```

2. In the project directory, install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## How to Setup EmailJS

### How to creare a new EmailJS account:
1. Go to [EmailJS](https://emailjs.com/) and create a new account and login to your account
2. Click "Add a new service" button in "Email Services" section in left sidebar
![alt text](image.png)
3. Then you will see the popup window and click the "Connect Account" button. Also Copy the service ID.
![alt text](image-1.png). 
After this it will show a new window and make sure to click all the check boxes
![alt text](image-2.png)
Note: After connecting your account, if you are getting kind of "can not connect to the email" error, disconnect and reconnect your account.
4. Then go to the "Email Templates" section in side bar and Click "create new template" button, and add below templete to the it

```text
Hello Brian,

You got a new message from {{from_name}} : User Email {{from_email}}

{{message}}

Best wishes,
EmailJS team
```
![alt text](image-3.png)
5. Then go to the "setting tab" and get the "Template Id"
![alt text](image-4.png)
6. Then Go to the "Account" section in side bar and copy the "Public key"
![alt text](image-5.png)
7. Copy the service ID, template ID, and public key
8. Paste the service ID, template ID, and public key into the configuration file `src/config/email.ts`