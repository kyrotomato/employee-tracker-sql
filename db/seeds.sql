USE employeeDB;

INSERT INTO department
(name)
VALUES
('finance'),
('science');

INSERT INTO role
(title, salary, department_id)
VALUES
('manager', 30000 , 2),
('scientist' , 20000 , 2);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Isaac', 'Gonzalez', 1, NULL),
('Thomas', 'Mccalister', 2, 1);