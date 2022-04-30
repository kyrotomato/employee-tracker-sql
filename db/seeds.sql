USE employeeDB;

INSERT INTO department
(name)
VALUES
('mechanic'),
('manager');

INSERT INTO role
(title, salary, department_id)
VALUES
('marketer', 10000 , 1),
('programmer' , 20000 , 2);