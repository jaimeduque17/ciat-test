# ciat-test
React Single Page Application, which allows you to read, create, edit and delete users, which include information such as: first name, last name, email, username, role and information about if the user is active.

## Description
ReactJS Single Page App with the following characteristics:
1. CRUD: Create, read, update and delete users. 


## Libraries/Components used
* create-react-app: Starter kit for creating a reactjs app.
* boostwatch: For basic styles and design.
* react-router-dom: For routing between screens.
* redux, react-redux: To handle the global state of the application.
* redux-thunk: Redux middleware library for dispatching asynchronous actions.
* axios: For REST API requests (json-server).
* sweetalert2: For creating alerts.
* json-server: Test REST API to save user data.

## Getting Started and Installing
These instructions will provide you with a copy of the working project on your local machine for development and testing purposes.

* First Git clone the repo into your computer
```
git clone https://github.com/jaimeduque17/ciat-test.git
```
* Open your terminal
```
$ cd ciat-test
$ npm install
```
* This should install all the dependencies. Once done
* Run 
``` 
$ yarn start
or
$ npm start
```
* to start the server.
* open (http://localhost:3000) in your browser. 
* This should open up the Demo App.

* At the same time, open another terminal and run
If you work with macOS or Linux
```
sudo npm install -g json-server
```
If you work with Windows, open the CMD such as Administrator and run
```
npm install -g json-server
```
* once intalled json-server and run in another terminal
```
json-server db.json --port 4000
```


## Author
* **Jaime Duque** - (https://github.com/jaimeduque17)