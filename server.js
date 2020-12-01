// require
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table")
let Database = require("./lib/db");

// create db connection
const db = new Database({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Running123",
  database: "cms_employeeDB"
});

// determine who is a manager from our employee table.
async function getManagerName(){
  let query = "SELECT * FROM employee WHERE manager_id IS NULL";
  // loop through employee table
  const rows = await db.query(query);
  let employeeNames = [];
  for (const employee of rows){
      employeeNames.push(employee.first_name + " " + employee.last_name);
  }
  return employeeNames;
}

// ask user what they want to do
async function start() {
  return inquirer
  .prompt([
      {
          type:"list",
          message:"What would you like to do?",
          name:"actions",
          choices:[
          "Add department", 
          "Add role", 
          "Add employee",
          "View departments", 
          "view roles", 
          "view employees",
          "Update employee roles",
          "Delete employee",
          "view all employees by department",
          "view employees by manager",
          "EXIT"]
      }
  ]);
}

// prompt the user to get the employee information
async function getAddEmployeeInfo(){
  const managers = await getManagerName();
  const roles = await getRoles();
  return inquirer.prompt([
      {
          
          name:"first_name",
          type:"input",
          message:"What is employee's first name?"
      },
      {
          name:"last_name",
          type:"input",
          message:"What is employee's last name?"   
      },
      {
          name:"role",
          type:"list",
          message:"What is the employee's role?",
          choices: [
              // we can use spread operator to pass the values of our roles array populate from the database.
              ...roles
          ]
      },
      {
          name:"manager",
          type:"list",
          message:"Who is the employee's manager?",
          choices: [
              // we can use spread operator to pass the values of our managers array populate from database
              ...managers
          ]
      }
  ]);
}