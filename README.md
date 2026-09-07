# Pet Helper

A full-stack app built with a React and Ruby on Rails

## 🚀 Features
* Secure User Authentication using JWT / Devise
* Responsive dashboard built with React and Semantic CSS
* Comprehensive RESTful API with full CRUD functionality

## 🛠️ Tech Stack

### Frontend
* **Framework:** React / JavaScript
* **State Management:** Redux Toolkit / React
* **Styling:** Semantic UI / Styled Components
  
### Backend
* **Framework:** Ruby on Rails 
* **Database:** PostgreSQL

## 💻 Local Setup & Environment Note

*Note: This is an archived portfolio project. To view or run the source code, please rely on the original dependencies locked within the configuration files.*

### Backend (Rails API)
1. Navigate to the backend directory:
   ```bash
   cd [your-backend-directory-name]
   ```
2. Install the gems specified in the original lockfile:
   ```bash
   bundle install
   ```
3. Initialize the database and run migrations:
   ```bash
   rails db:create db:migrate
   ```
4. Boot up the API server:
   ```bash
   rails server -p 3000
   ```

### Frontend (React)
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd [your-frontend-directory-name]
   ```
2. Install dependencies using the legacy lockfile:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Start the application:
   ```bash
   npm start
   ```

## ⚠️ Legacy Compatibility
Because the JavaScript and Ruby ecosystems evolve rapidly, attempting to boot this application on a modern environment may require aligning your local version managers (`nvm`, `rbenv`, `rvm`) with the versions declared in the root `Gemfile` and `package.json` files.


## 📄 License
This project is open-source and available under the MIT License.(LICENSE) file for details
