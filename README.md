# Fastify CRUD Task API

## Overview
This is a RESTful API built using Fastify that provides user authentication and task management features. The API allows users to register, log in, and manage their tasks (CRUD operations).

## Features
- User authentication (Register & Login)
- JWT-based authentication
- CRUD operations for tasks

## Installation

```bash
# Clone the repository
git clone <repo_url>
cd <project_folder>

# Install dependencies
npm install

# Start the server
npm run dev
```

## API Endpoints

### **User Authentication**

#### **Register User**
**POST** `/api/v1/user/register`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "status": "success",
  "result": {
    "name": "string",
    "email": "string",
    "token": "string"
  },
  "message": "User registered successfully"
}
```

#### **Login User**
**POST** `/api/v1/user/login`

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "status": "success",
  "result": {
    "name": "string",
    "email": "string",
    "token": "string"
  },
  "message": "Login successful"
}
```

#### **Get User Details** (Requires Authentication)
**GET** `/api/v1/user/`

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Response:**
```json
{
  "status": "success",
  "result": {
    "name": "string",
    "email": "string"
  },
  "message": "User details retrieved"
}
```

### **Task Management**

#### **Create Task**
**POST** `/api/v1/task/`

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Request Body:**
```json
{
  "title": "string",
  "description": "string"
}
```

**Response:**
```json
{
  "status": "success",
  "result": {
    "id": 0,
    "title": "string",
    "description": "string"
  },
  "message": "Task created successfully"
}
```

#### **Get All Tasks**
**GET** `/api/v1/task/`

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Response:**
```json
{
  "status": "success",
  "result": [
    {
      "id": 0,
      "title": "string",
      "description": "string"
    }
  ],
  "message": "Tasks retrieved successfully"
}
```

#### **Get Single Task**
**GET** `/api/v1/task/{id}`

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Response:**
```json
{
  "status": "success",
  "result": {
    "id": 0,
    "title": "string",
    "description": "string"
  },
  "message": "Task retrieved successfully"
}
```

#### **Update Task**
**PUT** `/api/v1/task/{id}`

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Request Body:**
```json
{
  "title": "string",
  "description": "string"
}
```

**Response:**
```json
{
  "status": "success",
  "result": {
    "id": 0,
    "title": "string",
    "description": "string"
  },
  "message": "Task updated successfully"
}
```

#### **Delete Task**
**DELETE** `/api/v1/task/{id}`

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Response:**
```json
{
  "status": "success",
  "result": {
    "id": 0,
    "title": "string",
    "description": "string"
  },
  "message": "Task deleted successfully"
}
```

## Technologies Used
- **Fastify** - Fast and low-overhead web framework
- **JWT** - Authentication & Authorization
- **MySQL** - Database


