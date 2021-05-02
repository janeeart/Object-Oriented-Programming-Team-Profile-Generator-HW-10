const inquirer = require("inquirer");
const fs = require("fs")
const htmlRender = require("./src/htmlTemplate");
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")

let arr = [];

function start (){

    inquirer.prompt([
        {
            message: "Select a team member's role to add to the profile:",
            name: "role",
            type: "list",
            choices: ["Engineer", "Manager", "Intern", "End"]
        },
    ]).then(choiceres => {
        if(choiceres.role == "Engineer") 
            {
                inquirer.prompt([
                    {
                        message: "Enter team member's name:",
                        type: "input",
                        name: "name"
                    },
                    {
                        message: "Enter team member's id:",
                        type: "input",
                        name: "id"
                    },
                    {
                        message: "Enter team member's email address:",
                        type: "input",
                        name: "email",
                    },
                    {
                        message: "Enter team member's GitHub username:",
                        type: "input",
                        name: "github"
                        },
                    ]).then(function(res) {
                            let engineer = new Engineer(res.name, res.id, res.email, res.github)
                            arr.push(engineer);
                            console.log(arr)
                            start()
                        })

        }
       else if(choiceres.role == "Manager") 
            {
                inquirer.prompt([
                    {
                        message: "Enter team member's name:",
                        type: "input",
                        name: "name"
                    },
                    {
                        message: "Enter team member's id:",
                        type: "input",
                        name: "id"
                    },
                    {
                        message: "Enter team member's email address:",
                        type: "input",
                        name: "email",
                    },
                    {
                        message: "Enter team member's office number:",
                        type: "input",
                        name: "officenumber"
                    },
                    ]).then(function(res) {
                            let manager = new Manager(res.name, res.id, res.email, res.officenumber)
                            arr.push(manager);
                            console.log(arr)
                            start()
                        })

        }
        else if(choiceres.role == "Intern") 
            {
                inquirer.prompt([
                    {
                        message: "Enter team member's name:",
                        type: "input",
                        name: "name"
                    },
                    {
                        message: "Enter team member's id:",
                        type: "input",
                        name: "id"
                    },
                    {
                        message: "Enter team member's email address:",
                        type: "input",
                        name: "email",
                    },
                    {
                        message: "Enter team member's school name:",
                        type: "input",
                        name: "school"
                    }
                    ]).then(function(res) {
                            let intern = new Intern(res.name, res.id, res.email, res.school)
                            arr.push(intern);
                            console.log(arr)
                            start()
                        })

        } else (choiceres.role == "End") 
        
        {
            fs.writeFile('./output/test.html', htmlRender(arr), err=> {
                if (err) throw err;
            });

        }
    })

}

start()