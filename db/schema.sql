DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    BURGER_NAME varchar (30),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);
