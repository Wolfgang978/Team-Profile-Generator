const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")
const Manager = require("./lib/Manager.js")
const generateHtml = require("./utils/generatehtml")
const employeeBucket = []

const init = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter Manager name", 
      name: "managerName"
    },
    {
      type: "input",
      message: "Enter Manager ID", 
      name: "managerId"
    },
    {
      type: "input",
      message: "Enter Manager email", 
      name: "managerEmail"
    },
    {
      type: "input",
      message: "Enter Manager office number", 
      name: "managerOfficeNumber"
    },
  ]) .then((t) => {
    
    const {managerName, managerId, managerEmail, managerOfficeNumber} = t
    const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber)
    employeeBucket.push(manager)
    
    anotherEmployee()
  })
}
const createEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter Engineer name", 
      name: "engineerName"
    },
    {
      type: "input",
      message: "Enter Engineer ID", 
      name: "engineerId"
    },
    {
      type: "input",
      message: "Enter Engineer email", 
      name: "engineerEmail"
    },
    {
      type: "input",
      message: "Enter Engineer Github username", 
      name: "engineerGithub"
    },
  ]) .then((t) => {
    
    const {engineerName, engineerId, engineerEmail, engineerGithub} = t
    const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub)
    employeeBucket.push(engineer)
    
    anotherEmployee()
  })
}
const createIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter Intern name", 
      name: "internName"
    },
    {
      type: "input",
      message: "Enter Intern ID", 
      name: "internId"
    },
    {
      type: "input",
      message: "Enter Intern email", 
      name: "internEmail"
    },
    {
      type: "input",
      message: "Enter Intern School name", 
      name: "internSchool"
    },
  ]) .then((t) => {
    
    const {internName, internId, internEmail, internSchool} = t
    const intern = new Intern(internName, internId, internEmail, internSchool)
    employeeBucket.push(intern)
    
    anotherEmployee()
  })
}
const anotherEmployee = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "Would you like to create an engineer or intern or finish your team?",
      choices: ["Finish", "Add an engineer", "Add an Intern"], 
      name: "createAnother"
    },
  ]) .then((chosenPrompt) => {
    
   
    if (chosenPrompt.createAnother === "Finish") {
      fs.writeFile("./dist/index.html", generateHtml(employeeBucket), (err) => err ? console.log("That's a failure. Try again?") : console.log("You did it! File was created in the dist folder"))
      return
    } else if (chosenPrompt.createAnother === "Add an engineer") {
      createEngineer()
    } else if (chosenPrompt.createAnother === "Add an Intern") {
      createIntern()
    }
  })
}




init()
