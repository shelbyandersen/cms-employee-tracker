# cms-employee-tracker

\*[Description](#Description)

\*[Installation](#Installation)

\*[Usage](#Usage)

\*[Contributing](#Contributing)

\*[Testing](#Testing)

\*[License](#License)

## Description

This project utilizes node, inquirer, and mysql to build a CMS solution for a company to manage their employees. This application utilizes the command line (CLI) to accomplish the following:

- Add departments, roles, employees

- View departments, roles, employees

- Update employee roles

- Update employee managers

- View employees by manager

- Delete departments, roles, and employees

- View the total utilized budget of a department -- the combined salaries of all employees in that department

![CMS Employee Tracker](./Assets/employee-tracker.gif)

To view the final application demo, please use this link:

- https://drive.google.com/file/d/1GOpxQoltj2tWPj6l_cXmTLf-bitYG_2V/view

# Installation

The code for the CMS Employee Tracker can be found on github using the following link:

- https://github.com/shelbyandersen/cms-employee-tracker

# Usage

The CMS Employee Tracker uses node.js, inquirer, and MySQL to create and store data for the application.

The database schema containing three tables:

- **department**:

  - **id** - INT PRIMARY KEY
  - **name** - VARCHAR(30) to hold department name

- **role**:

  - **id** - INT PRIMARY KEY
  - **title** - VARCHAR(30) to hold role title
  - **salary** - DECIMAL to hold role salary
  - **department_id** - INT to hold reference to department role belongs to

- **employee**:

  - **id** - INT PRIMARY KEY
  - **first_name** - VARCHAR(30) to hold employee first name
  - **last_name** - VARCHAR(30) to hold employee last name
  - **role_id** - INT to hold reference to role employee has
  - **manager_id** - INT to hold reference to another employee that manages the employee being created.

# Contributing

The initial design of this application was provided by Trilogy Educational Services.

The application was completed by Shelby Andersen

# Testing

To test this application you will need to fork the repo here:

- https://github.com/shelbyandersen/cms-employee-tracker

Then, run `node server.js` to begin the application in your integrated terminal.

# License

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

MIT License

Copyright (c) [2020] [Shelby Andersen]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

© 2020 Shelby Andersen in Collaboration with Georgia Tech Coding Boot Camp. All Rights Reserved.
