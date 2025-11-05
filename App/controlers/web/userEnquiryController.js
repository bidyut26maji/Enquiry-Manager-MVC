const enquiryModel = require('../../models/enquiry.model');

// ✅ Insert Enquiry
const EnquiryInsert = (req, res) => {
  const { sName, sEmail, sPhone, sMessage } = req.body;

  const enquiry = new enquiryModel({
    name: sName,
    email: sEmail,
    phone: sPhone,
    message: sMessage
  });

  enquiry.save()
    .then(() => res.send({ status: 1, message: 'Enquiry saved successfully' }))
    .catch(err =>
      res.status(500).send({ status: 0, message: 'Error while saving enquiry', error: err.message })
    );
};

// ✅ Get Enquiry List
const EnquiryList = (_req, res) => {
  enquiryModel.find()
    .then(enquiryList =>
      res.status(200).json({ status: 1, message: 'Enquiry list', data: enquiryList })
    )
    .catch(err =>
      res.status(500).json({ status: 0, message: 'Error fetching enquiries', error: err.message })
    );
};

// ✅ Delete Enquiry
const DeleteRes = (req, res) => {
  const enquiryId = req.params.id;

  enquiryModel.deleteOne({ _id: enquiryId })
    .then(delRes =>
      res.send({ status: 1, message: 'Enquiry deleted successfully', id: enquiryId, delRes })
    )
    .catch(err =>
      res.status(500).json({ status: 0, message: 'Error deleting enquiry', error: err.message })
    );
};

// ✅ Update Enquiry
const UpdateRes = (req, res) => {
  const enquiryId = req.params.id;
  const { sName, sEmail, sPhone, sMessage } = req.body;

  const updateObj = { name: sName, email: sEmail, phone: sPhone, message: sMessage };

  enquiryModel.updateOne({ _id: enquiryId }, updateObj)
    .then(updateRes =>
      res.send({ status: 1, message: 'Enquiry updated successfully', updateRes })
    )
    .catch(err =>
      res.status(500).json({ status: 0, message: 'Error updating enquiry', error: err.message })
    );
};

// ✅ Export (so index.js can import directly)
module.exports = { EnquiryInsert, EnquiryList, DeleteRes, UpdateRes };
