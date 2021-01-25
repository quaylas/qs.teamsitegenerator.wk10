
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const generateEngineers =  engineers => {
    if(engineers.length === 0){
        return '';    
    }
    return `
        <section class="content section container">
            <h2 class="title has-text-dark">Engineers</h2>
            <div class="content is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-between">

                ${engineers.map(({ empName, empEmail, empId, github }) => {
                    return `<article class="employee engineer is-flex is-flex-direction-column pb-3">
                    <h3 class="title has-background-primary-dark has-text-white py-3 px-2">
                        ${empName}
                    </h3>
                    <h4 class="subtitle has-text-primary-dark p-2">Engineer</h4>
                    <p class="py-1 px-2 has-text-grey">ID: ${empId}</p>
                    <p class="py-1 px-2 has-text-grey"><a href="https://github.com/${github}" target="_blank">${github}</a></p>
                    <p class="py-1 px-2 has-text-grey"><a href="mailto:${empEmail}">${empEmail}</a></p>
                </article>
                `;
                })
                .join('')}
            </div>
        </section>
    `;
};

const generateInterns = interns => {
    if(interns.length === 0){
        return '';
    }
    return `
        <section class="content section container">
            <h2 class="title has-text-dark">Interns</h2>
            <div class="content is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-between">

                ${interns.map(({ empName, empEmail, empId, school}) => {
                    return `<article class="employee intern is-flex is-flex-direction-column pb-3">
                    <h3 class="title has-background-info-dark has-text-white py-3 px-2">
                        ${empName}
                    </h3>
                    <h4 class="subtitle has-text-info-dark p-2">Intern</h4>
                    <p class="py-1 px-2 has-text-grey">ID: ${empId}</p>
                    <p class="py-1 px-2 has-text-grey">${school}</p>
                    <p class="py-1 px-2 has-text-grey"><a href="mailto:${empEmail}">${empEmail}</a></p>
                </article>
                `;
                })
                .join('')}
            </div>
        </section>
    `;
};

module.exports = teamData  => {
    const manager = teamData.filter(employee => employee instanceof Manager)[0];
    const engineers = teamData.filter(employee => employee instanceof Engineer);
    const interns = teamData.filter(employee => employee instanceof Intern);

    return `
    <!DOCTYPE html>
<html lang="en-us">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link href="/open-iconic/font/css/open-iconic.css" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <section class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        ${manager.empName}
                    </h1>
                    <p class="subtitle">
                        ${manager.empEmail} | Office #${manager.officeNumber}
                    </p>
                </div>
            </div>
        </section>
        ${generateEngineers(engineers)}
        ${generateInterns(interns)}
        <section class="footer">
            <div class="content has-text-right">
                <p><a href="mailto:${manager.empEmail}">${manager.empEmail}</a> | Office #${manager.officeNumber}</p>
            </div>
        </section>
    </body>
</html>
        `;
}
