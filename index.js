const inquirer = require("inquirer");
//var fs = require('fs');
//var GitHub = require('github-api');

inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your GitHub user name?"
    },
    {
        type: "password",
        name: "ghPassword",
        message: "What is your GitHub password?"
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Please enter a brief description of the project:"
    }
  ]).then(function(response) {

    console.log(JSON.stringify(response,null,2));
    // console.log(response.username);
    // console.log(response.ghPassword);
    // console.log(response.projectTitle);
    // console.log(response.projectDescription);

    // if (response.confirm === response.password) {
    //   console.log("Success!");
    // }
    // else {
    //   console.log("You forgot your password already?!");
    // }
  });
