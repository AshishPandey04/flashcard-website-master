Here's a revised overview and installation guide for your Flashcard Application:

---

### FLASHCARD WEBSITE

#### OVERVIEW
The Flashcard Website is a versatile web-based tool crafted to facilitate efficient learning through interactive flashcards. Ideal for students, educators, and lifelong learners, this application enhances study sessions by offering a user-friendly interface for managing and reviewing flashcards. Users can log in to access a comprehensive admin dashboard where they can create, update, or delete flashcards with ease. The interactive review feature allows users to flip flashcards with a click, providing an engaging way to reinforce knowledge.

#### TECHNOLOGIES USED
- **Frontend:** React.js, JSX, CSS
- **Backend:** Node.js, Express
- **Database:** MySQL
- **HTTP Client:** Axios

#### INSTALLATION

##### PREREQUISITES
- Node.js and npm installed
- MySQL database configured

##### SETUP
1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies:**
   - For the frontend:
     ```bash
     cd client
     npm install
     ```
   - For the backend:
     ```bash
     cd ../server
     npm install
     ```

3. **Set Up the Database:**
   - Create a MySQL database and configure the connection settings in `server/config/db.js`.

4. **Run the Application:**
   - Start the backend server:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend:
     ```bash
     cd ../client
     npm start
     ```

5. **Access the Application:**
   - Open your browser and go to `http://localhost:3000` to use the flashcard application.

#### ADMIN LOGIN
To access the admin panel, use the following credentials:
- **Email:** `admin@flipit.com`
- **Password:** `222324`

These credentials allow you to manage flashcards—adding new ones, editing existing ones, or deleting them as needed.

---

