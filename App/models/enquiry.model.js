const mongoose = require('mongoose');

const userEnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  message: {
    type: String,
    required: true
  }
});

const enquiryModel = mongoose.model('enquiry', userEnquirySchema);
module.exports = enquiryModel; // ✅ fixed
