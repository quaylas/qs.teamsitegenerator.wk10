// initialize dependencies
const inquirer = require('inquirer');
const fs =  require('fs');
const { off } = require('process');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamData = [];


// function to request and return information about the team manager
const getMgr = () => {
    let questions = [
        {
            type: 'input',
            name: 'empName',
            message: 'What is the team manager\'s name?',
            validate : empNameInput => {
                if (empNameInput){
                    return true;
                } else {
                    console.log('You must enter the team manager\'s name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empId',
            message: 'What is the team manager\'s employee ID? (requires a number value)',
            validate:  empIdInput => {
                if(isNaN(parseInt(empIdInput))){
                    console.log('You must enter a numeric value for the team manager\'s employee ID number.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'empEmail',
            message: 'What is the team manager\'s email address? (requires a string containing \'@\')',
            validate : empEmailInput => {
                if (empEmailInput.includes('@')){
                    return true;
                } else {
                    console.log('You must enter the team manager\'s email address. The address must contain \'@\'');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager\'s office number? (requires a number value)',
            validate:  officeNumberInput => {
                if(isNaN(parseInt(officeNumberInput))){
                    console.log('You must enter the team manager\'s office number.');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ];
    return inquirer.prompt(questions)
    .then(response => {
        let mgr = new Manager(response.empName, response.empId, response.empEmail, response.officeNumber);
        teamData.push(mgr);
        return teamData;
    })
};

// function to request  information about the team
const getTeam = (teamData) => {

    return inquirer.prompt([{
        type: 'list',
        name: 'empRole',
        message: 'Which type of team member would you like to add? (use arrow keys)',
        choices: ['Engineer','Intern','I\'m finished adding team members']
    }])
    .then(response => {
        if(response.empRole === 'I\'m finished adding team members'){
            return teamData;
        }
        else if(response.empRole === 'Engineer'){
            return getEngineer(teamData);
        }
        else if(response.empRole === 'Intern') {
            return getIntern(teamData);
        }
    });
};

// function to handle an engineer added to the team
const getEngineer = teamData =>{
    let questions = [
        {
            type: 'input',
            name: 'empName',
            message: 'What is the engineers\'s name?',
            validate : empNameInput => {
                if (empNameInput){
                    return true;
                } else {
                    console.log('You must enter the engineers\'s name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empId',
            message: 'What is the engineers\'s employee ID? (requires a number value)',
            validate:  empIdInput => {
                if(isNaN(parseInt(empIdInput))){
                    console.log('You must enter a numeric value for the engineer\'s employee ID number.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'empEmail',
            message: 'What is the engineers\'s email address? (requires a string containing \'@\')',
            validate : empEmailInput => {
                if (empEmailInput.includes('@')){
                    return true;
                } else {
                    console.log('You must enter the engineers\'s email address. The address must contain \'@\'');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers\'s GitHub username?',
            validate : githubInput => {
                if (githubInput){
                    return true;
                } else {
                    console.log('You must enter the engineers\'s GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'empRole',
            message: 'Which type of team member would you like to add? (use arrow keys)',
            choices: ['Engineer','Intern','I\'m finished adding team members']
        }
    ];
    return inquirer.prompt(questions)
    .then(engineerData => {
        let engineer = new Engineer(engineerData.empName, engineerData.empId, engineerData.empEmail, engineerData.github);
        teamData.push(engineer);

        if(engineerData.empRole === 'I\'m finished adding team members'){
            return teamData;
        }
        else if(engineerData.empRole === 'Intern'){
            return getIntern(teamData);
        }
        else if(engineerData.empRole === 'Engineer'){
            return getEngineer(teamData);
        };
    });
};

// function to handle an intern added to the team
const getIntern = teamData => {
    let questions =[
        {
            type: 'input',
            name: 'empName',
            message: 'What is the intern\'s name?',
            validate : empNameInput => {
                if (empNameInput){
                    return true;
                } else {
                    console.log('You must enter the intern\'s name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empId',
            message: 'What is the intern\'s employee ID? (requires a number value)',
            validate:  empIdInput => {
                if(isNaN(parseInt(empIdInput))){
                    console.log('You must enter a numeric value for the intern\'s employee ID number.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'empEmail',
            message: 'What is the intern\'s email address? (requires a string containing \'@\')',
            validate : empEmailInput => {
                if (empEmailInput.includes('@')){
                    return true;
                } else {
                    console.log('You must enter the intern\'s email address. The address must contain \'@\'');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does this intern attend?',
            validate : schoolInput => {
                if (schoolInput){
                    return true;
                } else {
                    console.log('You must enter the name of the school this intern attends.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'empRole',
            message: 'Which type of team member would you like to add? (use arrow keys)',
            choices: ['Engineer','Intern','I\'m finished adding team members']
        }
    ];
    return inquirer.prompt(questions)
    .then(internData => {
        let intern = new Intern(internData.empName, internData.empId, internData.empEmail, internData.school);
        teamData.push(intern);

        if(internData.empRole === 'I\'m finished adding team members'){
            return teamData;
        }
        else if(internData.empRole === 'Engineer'){
            return getEngineer(teamData);
        }
        else if(internData.empRole === 'Intern'){
            return getIntern(teamData);
        }
    });
};

getMgr()
    .then(getTeam)
    .then(teamData => {
        console.log(teamData);
    });

// getMgr()
//     .then(getTeam)
//     .then(teamData => {
//         return generateTeamPage(teamData);
//     })
//     .then(teamPageHTML => {
//         return writeFile(teamPageHTML);
//     })