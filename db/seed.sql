USE cms_employeeDB;
-- Insert rows into table 'department'
INSERT INTO department (name) VALUES ("Marketing");

--  Insert rows into table 'role'
INSERT INTO role ( title, salary, department_id) VALUES ("Marketing Manager", 60000, 1);

-- Insert rows into table 'employee'
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Tiara", "Ruppert", 3, 8);