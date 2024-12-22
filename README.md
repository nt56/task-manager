# Task Manager 

Design and implement a RESTful API for managing tasks using Node.js and mongoDB.

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

1. Add the task.

    - POST/addTask : add the new task

    ```json 
    [
        {
        "title" : "Drink",
        "description" : "Drinking Water on time."
        }
    ]

2. get all the tasks.

    - GET/getAllTasks : get all the tasks

    ```json 
    [
        {
            "_id": "67678df47817e9d93ce01805",
            "title": "Exercise",
            "description": "Morning Exercise is Done",
            "isCompleted": true,
            "createdAt": "2024-12-22T03:56:36.556Z",
            "updatedAt": "2024-12-22T04:18:11.315Z",
            "__v": 0
        },
        {
            "_id": "6767e81ae8196ca58657df1d",
            "title": "Lunch",
            "description": "Lunch is Done",
            "isCompleted": true,
            "createdAt": "2024-12-22T10:21:14.234Z",
            "updatedAt": "2024-12-22T10:22:17.216Z",
            "__v": 0
        },
        {
            "_id": "6767e933dec987fbd7a6e104",
            "title": "Drink",
            "description": "Drinking Water on time.",
            "isCompleted": false,
            "createdAt": "2024-12-22T10:25:55.102Z",
            "updatedAt": "2024-12-22T10:25:55.102Z",
            "__v": 0
        }
    ]

3. get single task by ID.

    - GET/getTask : get single task by ID

    ```json 
    [
        {
        "_id": "67678df47817e9d93ce01805",
        "title": "Exercise",
        "description": "Morning Exercise is Done",
        "isCompleted": true,
        "createdAt": "2024-12-22T03:56:36.556Z",
        "updatedAt": "2024-12-22T04:18:11.315Z",
        "__v": 0
        }
    ]

4. update single task by ID.

    - PATCH/updateTask : update single task by ID

5. delete single task by ID.

    - DELETE/deleteTask : delete single task by ID

6. register new user auth middlware is implemented.

    - POST/register : register new user

    ```json
    [
        {
            "firstName" : "Roronoa",
            "lastName" : "Zoro",
            "emailId" : "",
            "password" : ""
        }
    ]

7. login user (user authentication added).

    - POST/login : login user

    ```json
    [
        {
            "emailId" : "",
            "password" : ""
        }
    ]

Thank You