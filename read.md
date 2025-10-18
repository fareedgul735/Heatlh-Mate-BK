│── src/
│ ├── config/ # DB, environment, JWT config
│ ├── controllers/ # Logic of APIs (signup, login, posts etc.)
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── middlewares/ # Authentication, error handling
│ ├── services/ # Business logic (optional, for large apps)
│ ├── utils/ # Helper functions (e.g. password hash, token)
│ ├── app.js # Express app setup
│── server.js # Entry point
│── .env # Secrets (DB_URL, JWT_SECRET, etc.)
