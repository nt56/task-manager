# Task Manager API
Design and implement a RESTful API or GraphQL API for managing tasks using Node.js and mongoDB.

## Project Setup Instructions

### Prerequisites

1. Ensure you have the following installed:
   - [Node.js](https://nodejs.org/) (v14 or above)
   - [MongoDB](https://www.mongodb.com/)
2. A terminal or command prompt for running the application.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd task-manager

2. Install The dependencies:

   ```bash
   npm install

3. setup the environment:

    - Create a .env file in the root directory with the following variables:

    ```bash
    MONGO_URI=your-mongodb-connection-string
    PORT=port-number
    JWT_SECRET=jwt-secret-key

4. start the mongoDB server locally or cloud.

5. start the project

    ```bash
    npm run dev

## API EndPoints1. Get all the task.

1. Get all the task.
    - /POST/addTask : add the new task

    ```json 
    [
        {
        "title" : "Drink",
        "description" : "Drinking Water on time."
        }
    ]