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

// return role as an array
async function getRoles(){
  let query = "SELECT  title FROM role";
  const rows = await db.query(query);
  let roles = [];
  for(const row of rows){
      roles.push(row.title);
  }
  return roles;
}

// return department names as an array
async function getDepartmentNames(){
  let query = "SELECT name FROM department";
  const rows = await db.query(query);
  let departments = [];
  for(const row of rows){
      departments.push(row.name);
  }
  return departments;
}

//
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

async function getRoleInfo(){
  const departments = await getDepartmentNames();
  return inquirer
  .prompt([
      {
          name: "roleName",
          type: "input",
          message: "What is the title of the new role?"
      },
      {
          name:"salary",
          type:"input",
          message:"What is the salary of the new role?"
      },
      {
          name: "departmentName",
          type: "list",
          message: "Which department uses this role?",
          choices: [
              ...departments
          ]
      }
  ]);
}