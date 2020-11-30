USE cms_employee_db;
-- Insert rows into table 'department'
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Security");
INSERT INTO department (name) VALUES ("HR");
INSERT INTO department (name) VALUES ("IT");
INSERT INTO department (name) VALUES ("Sales");

--  Insert rows into table 'role'
INSERT INTO role ( title, salary, department_id) VALUES ("Marketing Manager", 60000, 1);
INSERT INTO role ( title, salary, department_id) VALUES ("Market Analyst", 50000, 1);
INSERT INTO role ( title, salary, department_id) VALUES ("Sales Person", 70000, 5);
INSERT INTO role ( title, salary, department_id) VALUES ("Software Developer", 125000, 4);
INSERT INTO role ( title, salary, department_id) VALUES ("Security Staff", 45000, 2);
INSERT into role (title, salary, department_id) VALUES ("Web Developer", 120000, 4);
INSERT into role (title, salary, department_id) VALUES ("IT Manager", 150000, 4);
INSERT into role (title, salary, department_id) VALUES ("Sales Manager", 100000, 5);
INSERT into role (title, salary, department_id) VALUES ("Security Manager", 60000, 2);
INSERT into role (title, salary, department_id) VALUES ("Counselor", 85000, 3);
-- Insert rows into table 'employee'
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Tiara", "Ruppert", 3, 8);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Avery", "Tennison", 8, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Cyril", "Ledford", 3, 8);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Kelvin", "Glascock", 3, 8);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Malik", "Rathbone", 7, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Giovanna", "Mulhill", 6, 7);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Wilford", "Telles", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Colby", "Garriott", 4, 7);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Manual", "Dunham", 4, 5);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Casandra", "Podesta", 2, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Rodney", "Zito", 2, 5);


INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Henrietta", "Reardon", 10, null);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Mattie", "Combs", 5, 9);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Audrie", "Shimek", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Mendy", "Womer", 5, 9);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Leeanne", "Starke", 1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Wilhelmina", "Graf", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Alease", "Symons", 2, 1);