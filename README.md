# Add Magic Link Authentication & RBAC to Your React App
Explore the Magic Link and RBAC features of Descope for a React application. Create roles, manage access and enhance the user experience by avoiding password-related issues, while simplifying the authentication process for developers by reducing the complexity of implementing authentication.

This project is created using React and integrates with the Descope API to create a seamless authentication and authorization flow.
## Getting Started
Here are the things you will need to get this project running:
### Prerequisites
- [Node v20](https://nodejs.org/en/download/prebuilt-installer)
- [Visual Studio Code](https://code.visualstudio.com/)
- [A Descope Free Forever Account](https://www.descope.com/sign-up)
- An email account. [You can use a free temporary email service](https://temp-mail.org/en/)

Use a command line interface (cmd, PowerShell etc.), follow the steps below:
### Step 1. Clone or download this repository
```sh
git clone https://github.com/smhlanadev/descope-react.git
```
### Step 2. Install the node dependencies
```sh
cd descope-react
npm install
```
### Step 3. Run the application
```sh
npm start
```
### Step 4. Login
After successfully compiling, navigate to the URL shown in the terminal. It is usually http://localhost:3000/. This displays the login screen:

![Login screen](https://i.imgur.com/8boCMNh.png)

Enter the email address you want to authenticate with and click on **Continue**. You will receive an email with the link. Click on the link, and you will be authenticated and redirected to the application.
Now that you’re authenticated, you will be able to see the recipes based on the role configurations:

![After authentication is successful](https://i.imgur.com/tO1WbtN.png)
