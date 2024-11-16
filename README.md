Installation Steps

1. Clone the repository
   ```
   git clone https://github.com/Ronkl14/car-warehouse.git
   cd car-warehouse
   code
2.  - Create a .env file in the root directory if it doesn't exist.
    - Add or update your database credentials in the .env file:
      
    ```
    DB_HOST=your_db_host
    DB_USER=your_db_user
    DB_PORT=your_db_port
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name
  - Important: Add .env to .gitignore to keep it private.

3. Modify the database configuration
   Open backend/config/config.json and update the database credentials
   ```
     {
      "development": {
        "username": "your_db_user",
        "password": "your_db_password",
        "database": "your_db_name",
        "host": "your_db_host",
        "dialect": "mssql"
      }
    }
4. Install backend dependencies
   ```
   cd backend
   npm install
5. Run database migrations
   ```
   npx sequelize db:migrate
6. Seed the database
   ```
   npx sequelize db:seed:all
7. Start the server
   ```
   node server.js
8. Install frontend dependencies
   ```
   cd ..
   cd frontend
   npm install
9. Start the frontend application
   ```
   npm start
