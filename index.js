// index.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const enquiryRoutes = require('./App/routes/web/enquiryRoutes');

const app = express();
app.use(express.json());

app.use("/web/api", enquiryRoutes);

// ✅ Connect to MongoDB and start server
mongoose.connect(process.env.DBURL)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log('🚀 Server running on port ' + process.env.PORT);
    });
  })
  .catch(err => console.log('❌ MongoDB connection failed: ' + err.message));
