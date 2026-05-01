# 💰 Smart File-Based Banking System

A simple full-stack banking system built using **Java (Backend)** and **HTML, CSS, JavaScript (Frontend)**.  
This project demonstrates core backend concepts like file handling, exception handling, collections, and basic security along with a simple frontend interface.

---

## 🚀 Features

### 🔹 Backend (Java)
- User Registration & Login
- Deposit & Withdraw Money
- Balance Checking
- File Handling using `users.dat`
- Exception Handling (invalid amount, insufficient balance)
- Collection Framework (`HashMap`)
- Basic Authentication System

### 🔹 Frontend (HTML, CSS, JS)
- User-friendly login & registration UI
- Dashboard for banking operations
- LocalStorage used for simulating backend connection
- Simple and responsive design

---

## 🛠️ Technologies Used

- Java (Core Java)
- File Handling (ObjectInputStream, ObjectOutputStream)
- HTML5
- CSS3
- JavaScript (ES6)

---

## 📂 Project Structure
BankingSystem/
│
├── Backend/
│ ├── BankingSystem.java
│ └── users.dat
│
├── Frontend/
│ ├── index.html
│ ├── dashboard.html
│ ├── style.css
│ └── script.js
## ▶️ How to Run Backend (Java)

1. Open Eclipse or any Java IDE
2. Create a new Java Project
3. Add `BankingSystem.java`
4. Remove package line (if any)
5. Run the program


javac BankingSystem.java
java BankingSystem


👉 This will create a file:

users.dat


---

## 🌐 How to Run Frontend

1. Open `Frontend` folder
2. Double-click:

index.html


👉 It will open in your browser

---

## 🔗 Backend & Frontend Connection

Currently:
- Frontend uses **LocalStorage**
- Backend uses **File System (users.dat)**

⚠️ They are **not directly connected**

---

## 🔥 Future Improvements

- Connect frontend with backend using Java Servlets / APIs
- Add transaction history
- Implement password encryption
- Add admin panel
- Upgrade UI design

---

## 🎯 Learning Outcomes

This project helps understand:
- File Handling in Java
- Exception Handling
- Collection Framework
- Basic Security Concepts
- Frontend Development Basics

---

## 📌 Note

This project is built for **learning purposes** and demonstrates core backend + frontend integration concepts.

---

## 👨‍💻 Author
Ruchika Vidhate
