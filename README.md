🧠 Enquiry Management MVC (MERN Stack Backend)

A complete backend project built using the MVC pattern in the MERN stack.
This project demonstrates how to create systematic API routes using MongoDB, Express, and Node.js,
with Thunder Client as the testing tool.

📘 Table of Contents

📖 Overview

🧩 Features

🏗️ Tech Stack

📁 Folder Structure (MVC Pattern)

⚙️ Installation & Setup

🧱 Environment Variables

🚀 Running the Server

📡 API Endpoints

🧪 Testing with Thunder Client

🗄️ MongoDB Schema

💡 Future Enhancements

🤝 Contributing

📜 License

🧑‍💻 Author

📖 Overview

This project is a Node.js + Express.js + MongoDB backend for managing Enquiries.
It follows the MVC architecture (Model–View–Controller) pattern to keep code modular, scalable, and organized.

Designed for developers learning backend structure, API design, and MERN architecture principles.

You can easily test all the API endpoints using Thunder Client or Postman.

🧩 Features

✅ Built using MVC architecture
✅ RESTful API endpoints
✅ CRUD operations for enquiries
✅ Connected to MongoDB via Mongoose
✅ JSON response structure with status codes
✅ Error handling with descriptive messages
✅ Tested using Thunder Client in VS Code
✅ Easily integrable with a frontend (React, Angular, etc.)

🏗️ Tech Stack
Layer	Technology
Frontend	React (Optional)
Backend	Node.js, Express.js
Database	MongoDB (Mongoose ODM)
Testing	Thunder Client / Postman
Environment	dotenv
Version Control	Git + GitHub
📁 Folder Structure (MVC Pattern)
backend/
│
├── index.js                 # Entry point of the app
├── .env                     # Environment variables (DB URL, PORT)
│
├── App/
│   ├── models/
│   │   └── enquiry.model.js         # Mongoose schema (Model)
│   ├── controllers/
│   │   └── enquiry.controller.js    # CRUD logic (Controller)
│   └── routes/
│       └── enquiry.routes.js        # API route definitions (Router)
│
└── package.json

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/<your-username>/enquiry-management-mvc.git
cd enquiry-management-mvc


Install dependencies

npm install


Create a .env file

In the project root, create a .env file and add:

PORT=5000
DBURL=mongodb://127.0.0.1:27017/enquirydb


Run the project

npx nodemon index.js

🧱 Environment Variables
Variable	Description	Example
PORT	The port on which your server runs	5000
DBURL	MongoDB connection URL	mongodb://127.0.0.1:27017/enquirydb
🚀 Running the Server

After setup, you should see this in your terminal:

✅ Connected to MongoDB
🚀 Server running on port 5000


Now your backend is live at:

http://localhost:5000

📡 API Endpoints
🟢 1. Create Enquiry

POST /api/enquiry/enquiry-insert

Request Body:

{
  "sName": "John Doe",
  "sEmail": "john@example.com",
  "sPhone": "9876543210",
  "sMessage": "Need information about pricing."
}


Response:

{
  "status": 1,
  "message": "Enquiry saved successfully"
}

🟣 2. Get All Enquiries

GET /api/enquiry/enquiry-list

Response:

{
  "status": 1,
  "message": "Enquiry list",
  "data": [
    {
      "_id": "671c6dcfe1b8d0aa314b1223",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "9876543210",
      "message": "Need information about pricing.",
      "createdAt": "2024-11-05T18:12:00Z"
    }
  ]
}

🔵 3. Update Enquiry

PUT /api/enquiry/enquiry-update/:id

Request Body:

{
  "sName": "Jane Doe",
  "sEmail": "jane@example.com",
  "sPhone": "9999999999",
  "sMessage": "Updated message content."
}


Response:

{
  "status": 1,
  "message": "Enquiry updated successfully"
}

🔴 4. Delete Enquiry

DELETE /api/enquiry/enquiry-delete/:id

Response:

{
  "status": 1,
  "message": "Enquiry deleted successfully"
}

🧪 Testing with Thunder Client

You can use Thunder Client (VS Code extension) to test all API endpoints:

Install the “Thunder Client” extension from VS Code marketplace.

Create a new request for each API endpoint above.

Set the Content-Type to application/json.

Enter JSON data in the body (for POST/PUT).

Click Send and view the response instantly.

🗄️ MongoDB Schema
// enquiry.model.js
const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Enquiry', EnquirySchema);

💡 Future Enhancements

🚀 Add authentication (JWT)
📊 Add pagination & sorting
📩 Add email notifications on new enquiry
💾 Implement data validation using Joi
🌐 Deploy backend on Render / Vercel

🤝 Contributing

Contributions are always welcome!
To contribute:

Fork this repo

Create a feature branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Added new feature')

Push to your branch (git push origin feature-name)

Create a Pull Request 🎉

📜 License

This project is open-source and available under the MIT License.

🧑‍💻 Author

Bidyut Mandal
💼 MERN Stack Developer
📧 [bmaji0418@gmail.com}
]
🌐 GitHub Profile
