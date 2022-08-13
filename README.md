# Telegraph - A Modern Content Management System
A content management system (CMS), is software that helps users create, manage, and modify content on a website without the need for specialized technical knowledge. Once can even monitze the content and earn the revenue.

### Features of Telegraph
- Admin (Role)
    - Ability to create, view, update, delete all posts
    - Ability to create, view, update, delete all comments
    - Ability to create, view, update, delete all media files
    - Ability to create, view, update, delete all users
    - Nice statistics on Dashboard
- Author (Role)
    - Rich Text Editor
    - Featured Image for posts
    - Comments Feedback
    - Dedicated dashboard
    - Profile Update

### How to run the project
Clone the project. To run the frontend client. Open the CMD/terminal in `client` folder and run below commands.
```
cd client
yarn install
npm run dev
```
**Note:** Install the node packages in `client` using yarn only, npm may give you dependencies error. If yarn is not isntalled globally, then open CMD and type the below command to install yarn for your system.
```
npm install --global yarn
```
Run the backend server of the application. Open the CMD/Terminal in `server` folder and run the below command.
```
cd server
npm install
npm start
```
Once the connection is established, you can open `http://localhost:3000` in chrome.

### Application Testing
The testing is done using [Selenium](https://www.selenium.dev/documentation/webdriver/getting_started/install_library/), [Chai](https://www.chaijs.com/) and [Mocha](https://mochajs.org/).
Before testing make sure you have latest firefox browser installed. If not, you can download from [here](https://www.mozilla.org/en-US/firefox/new/). Open the `client` folder and run the below commands in CMD/Terminal.
```
npm test
```
**Testing Output**
![Testing]()