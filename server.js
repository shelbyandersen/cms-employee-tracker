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

// determine the id for each department name from department table.
async function getDepartmentId(departmentName){
  let query = "SELECT * FROM department WHERE department.name=?";
  let args = [departmentName];
  const rows = await db.query(query, args);
  return rows[0].id;
}

// get the role's id for each title column from role table.
async function getRoleId(roleName){
  let query = "SELECT * FROM role WHERE role.title=?";
  let args = [roleName];
  const rows = await db.query(query, args);
  return rows[0].id;
}

// define employee role
async function updateEmployeerole(employeeInfo){
  const roleId = await getRoleId(employeeInfo.role);
  const employee = getFirstAndLastName(employeeInfo.employeeName);

  let query = "UPDATE employee SET role_id=? WHERE employee.first_name=? AND employee.last_name=?";
  let args = [roleId, employee[0], employee[1]];
  const rows = await db.query(query, args);
  console.log(`You updated employee ${employee[0]} ${employee[1]} with role ${employeeInfo.role}`);
}

async function addEmployee(employeeInfo){
  let roleId = await getRoleId(employeeInfo.role);
  let managerId = await getEmployeeId(employeeInfo.manager);
  let query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
  let args = [employeeInfo.first_name, employeeInfo.last_name, roleId, managerId];
  const rows= await db.query(query, args);
  console.log(`You Added employee ${employeeInfo.first_name} ${employeeInfo.last_name}.`);

}

async function addRole(roleInfo){
  const departmentId = await getDepartmentId(roleInfo.departmentName);
  const salary = roleInfo.salary;
  const title = roleInfo.roleName;
  let query = "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)";
  let args = [title, salary, departmentId];
  const rows = await db.query(query, args);
  console.log(`Added roles ${title}`);
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