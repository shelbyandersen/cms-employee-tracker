// require
const mysql = require("mysql");
const prompt = require("inquirer");
const cTable = require("console.table")
let Database = require("./lib/db");

// create db connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Running123",
  database: "cms_employeeDB"
});

connection.connect(function(err) {
  if (err) throw err;
//   userInput();
});

function userInput() {
//   inquirer
//     .prompt({
//       name: "action",
//       type: "list",
//       message: "What would you like to do?",
//       choices: [
//         "Find songs by artist",
//         "Find all artists who appear more than once",
//         "Find data within a specific range",
//         "Search for a specific song",
//         "exit"
//       ]
//     })
//     .then(function(answer) {
//       switch (answer.action) {
//       case "Find songs by artist":
//         artistSearch();
//         break;

//       case "Find all artists who appear more than once":
//         multiSearch();
//         break;

//       case "Find data within a specific range":
//         rangeSearch();
//         break;

//       case "Search for a specific song":
//         songSearch();
//         break;

//       case "exit":
//         connection.end();
//         break;
//       }
//     });
}

userInput();
