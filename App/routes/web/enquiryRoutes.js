const { EnquiryInsert, EnquiryList, DeleteRes, UpdateRes } = require("../../controlers/web/userEnquiryController");

let express=require ('express');
let enquiryRoutes=express.Router();
enquiryRoutes.post('/enquiry-insert',EnquiryInsert );
enquiryRoutes.get('/enquiry-list', EnquiryList);
enquiryRoutes.delete('/enquiry-delete/:id',DeleteRes);
enquiryRoutes.put('/enquiry-update/:id', UpdateRes);
module.exports=enquiryRoutes;
