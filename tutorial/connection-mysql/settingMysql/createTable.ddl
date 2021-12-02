DROP DATABASE IF EXISTS node_sample_db;
CREATE DATABASE IF NOT EXISTS node_sample_db;
USE node_sample_db;

DROP TABLE IF EXISTS members;
CREATE TABLE IF NOT EXISTS members(
	id INT primary key auto_increment,
	name VARCHAR(20) not null
);

INSERT INTO members (name) VALUES ("Ito");
INSERT INTO members (name) VALUES ("Goto");
INSERT INTO members (name) VALUES ("Kato");
INSERT INTO members (name) VALUES ("Sato");