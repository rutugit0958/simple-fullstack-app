
**Simple Full Stack Application — AWS + Node.js + MySQL**

 Project Description
This project is a simple full stack application built using **Node.js (Express)** and **MySQL**, deployed on an **AWS EC2 Ubuntu server**.  
The application connects successfully to the database and fetches data through a backend API endpoint.

This project demonstrates AWS server setup, backend deployment, database connectivity, SSH access, and GitHub version control.

---

 Technology Stack

- AWS EC2 (Ubuntu)
- Node.js
- Express.js
- MySQL
- Windows PowerShell (SSH connection)
- Git & GitHub

---

Architecture Overview

User Browser
↓
HTTP Request (Port 3000)
↓
AWS EC2 Ubuntu Server
↓
Node.js + Express Backend
↓
MySQL Database
↓
Query Result Returned to Browser

---

 Setup & Deployment Steps

Launch EC2 Instance
- Ubuntu Server
- Instance type: t2.micro
- Open Ports:
  - 22 (SSH)
  - 80 (HTTP)
  - 3000 (App Port)

---

 Connect Using PowerShell
ssh -i key.pem ubuntu@EC2-PUBLIC-IP



---

 Install Required Packages
sudo apt update
sudo apt install nodejs npm mysql-server git -y

---

 Database Setup

sudo mysql

CREATE DATABASE testdb;
USE testdb;

CREATE TABLE users(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50)
);

INSERT INTO users(name) VALUES ('Sample User');




---
Install Node Dependencies

npm install





---

 Run Application
node app.js



Server runs on:
http://EC2-PUBLIC-IP:3000
---

 Features

- Backend server using Express
- MySQL database connection
- Live data fetch from database
- Cloud deployment on AWS
- SSH server management
- GitHub version control

---

Screenshots

> (Screenshots stored inside `/screenshots` folder)

### EC2 Instance Running
![EC2](screenshots/ec2.png)

### SSH Connection
![SSH](screenshots/ssh.png)

### Node Server Running
![Node](screenshots/node.png)

### MySQL Database Output
![MySQL](screenshots/mysql.png)

### Browser Result
![Browser](screenshots/browser.png)

---

 How to Test

Open browser and visit
:http://EC2-PUBLIC-IP:3000





Author

Rutuja Patil
AWS Server Management Assignment Project

---

 Repository Purpose

Assignment submission project demonstrating:

- AWS EC2 setup
- Backend deployment
- Database connectivity
- GitHub repository management
























