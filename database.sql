CREATE DATABASE EmployeeDB;

USE EmployeeDB;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL,
    contact VARCHAR(100) NOT NULL
);

INSERT INTO Users (username, password) VALUES ('admin', '123456');
