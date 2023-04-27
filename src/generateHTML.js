const generateManager = function (manager) {
    return `
      <div class="col- m-2 p-2 mt-4">
          <div class="card h-100 manager">
              <div class="card-header">
                  <h3 class = "card-title">${manager.name}</h3>
                  <h4 class = "card-subtitle">Manager</h4>
              </div>
              <div class="card-body">
                  <p class="card-text">ID: ${manager.id}</p>
                  <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                  <p class="card-text">Office Number: ${manager.officeNumber}</p>
              </div>
          </div>
      </div>
      `;
  };
  
  const generateEngineer = function (engineer) {
    return `
      <div class="col- m-2 p-2 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3 class="card-title">${engineer.name}</h3>
              <h4 class="card-subtitle">Engineer</h4>
          </div>
          <div class="card-body">
              <p class="card-text">ID: ${engineer.id}</p>
              <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p class="card-text">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>
      </div>
  </div>
  `;
  };
  
  const generateIntern = function (intern) {
    return `
      <div class="col- m-2 p-2 mt-4">
          <div class="card h-100">
              <div class="card-header text-center">
                  <h3>${intern.name}</h3>
                  <h4 class="card-subtitle">Intern</h4> </div> 
                  <div class="card-body"> 
                  <p class="card-text">ID: ${intern.id}</p> 
                  <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p> 
                  <p class="card-text">School: ${intern.school}</p>
              </div>
      </div>
  </div>
      `;
  };
  
  const generateHTML = (data) => {
    let pageArray = [];
    for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole();
  
      if (role === "Manager") {
        const managerCard = generateManager(employee);
  
        pageArray.push(managerCard);
      }
  
      if (role === "Engineer") {
        const engineerCard = generateEngineer(employee);
  
        pageArray.push(engineerCard);
      }
  
      if (role === "Intern") {
        const internCard = generateIntern(employee);
  
        pageArray.push(internCard);
      }
    }
  
    const employeeCards = pageArray.join("");
  
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
  };
  
  const generateTeamPage = function (employeeCards) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>The Dream Team</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
          <link rel="stylesheet" type="text/css" href="style.css">
          </head>
      <body>
          <header>
              <nav class="navbar">
                  <div class="navbar">Team Profile</a>
              </nav>
          </header>
          <main>
              <div class="container">
                  <div class="row justify-content-center">
                      <!--Team Cards-->
                      ${employeeCards}
                  </div>
              </div>
          </main>
      </body>
      </html>
      `;
  };
  
  module.exports = generateHTML;