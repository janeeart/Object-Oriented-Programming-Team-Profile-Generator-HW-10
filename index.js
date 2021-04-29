const inquirer = require("inquirer");
const fs = require("fs")
const htmlRender = require("./src/htmlTemplate");
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")

const employees = [];

function start (){

    inquirer.prompt([
        {
            message: "Select a team member's role to add to the profile:",
            name: "role",
            type: "list",
            choices: ["Engineer", "Manager", "Intern", "End"]
        },
    ]).then(choiceres => {
        if(choiceres.role == "End"){
            fs.writeFile('./output/test.html', htmlRender(arr), err=>{
                if (err) throw err;
            });
        }else {
            askBasic(choiceres)
        }
    })
}

function askBasic(param){
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
        }
    ]).then(res => {
        if(param.role == "Engineer"){
            inquirer.prompt([ 
                {
                message: "Enter team member's GitHub:",
                type: "input",
                name: "github"
                }
            ]).then(engineerRes => {
                let engineer = new Engineer(param.role, res.name, res.id, res.email, engineerRes.github)
                arr.push(engineer);
                console.log(arr)
                start()
            })
        }
        else if(param.role == "Intern") {
            inquirer.prompt([
                {
                    message: "Enter team member's school name:",
                    type: "input",
                    name: "school"
                }
            ]).then(internRes => {
                let intern = new Intern(param.role, res.name, res.id, res.email, internRes.school)
                arr.push(intern);
                console.log(arr)
                start()
            })
        }
        else if(param.role == "Manager") {
            inquirer.prompt([
                {
                    message: "Enter team member's office number:",
                    type: "input",
                    name: "officenumber"
                }
            ]).then(managerRes => {
                let manager = new Manager(param.role, res.name, res.id, res.email, managerRes.officenumber)
                arr.push(manager);
                console.log(arr)
                start()
            })
        }
    })
}

start()