# Atm Simulation Full Stack Web Application (React.js + Spring Boot + MySQL)

This is a full-stack web application built using React.js for the frontend, Spring Boot for the backend, and MySQL as the database.

## 🛠 Technologies Used

* **Frontend**: React.js
* **Backend**: Spring Boot (Java)
* **Database**: MySQL

---

## 🚀 Quick Start Steps

1. **Clone the Repository**:

```bash
git clone https://github.com/Raahim10/atm-simulation
```

2. **Java & Node.js Setup**:

   * Make sure **Java JDK** and **Node.js** are installed on your system.
   * Install **MySQL Server** and **MySQL Workbench**.

3. **Open Backend in Eclipse**:

   * Open Eclipse IDE.
   * Go to `File > Import > Maven > Existing Maven Projects`.
   * Navigate to the `Backend` folder of the project and import it.

4. **Start MySQL and Create Database**:

   * Open MySQL Workbench.
   * Create a database named `atm_db`:

```sql
CREATE DATABASE atm_db;
```

5. **Backend Configuration (Spring Boot)**:

   * The backend is configured in the `application.properties` file:

```properties
spring.application.name=atm
spring.datasource.url=jdbc:mysql://localhost:3306/atm_db
spring.datasource.username=root
spring.datasource.password=raahim1414
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

* **Important:** You must replace `spring.datasource.username` and `spring.datasource.password` with your own MySQL username and password. This is required for the backend to connect to your local database.
* Example:

```properties
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
```

6. **Run the Spring Boot Application**:

   * Go to: `Backend/src/main/java/com/raahim/atm/AtmApplication.java`
   * Right-click on `AtmApplication.java` > `Run As` > `Java Application`
   * The backend will start on: `http://localhost:8080`

7. **Run the Frontend (React.js)**:

   * Open a terminal and navigate to the `frontend` directory:

```bash
cd frontend
npm install
npm start
```

* The React app will run at: `http://localhost:3000`

8. **API Connection**:

   * Make sure frontend API calls point to `http://localhost:8080`

---

## ✅ Final Setup

* MySQL must be running and `atm_db` database must be created.
* Start the Spring Boot backend.
* Start the React frontend.
* Open `http://localhost:3000` to use the app.

---
