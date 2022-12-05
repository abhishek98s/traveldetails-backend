const express = require('express');
const router = express();
let Careers = require('../models/careers.models');
const multer = require('multer');
const methodOverride = require('method-override')
const GridFsStorage = require("multer-gridfs-storage");
const { config } = require('dotenv');

//storge and filename setting
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/images')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

// let upload =multer({
//   storage: storage  
// })


//create srorage engine
const storage = new GridFsStorage({
  url: config.mongoURI,
  file: (req, file) => {
    return new Promise((resolve, rejectmm))
  }
})


// router.post('/add', upload.single('cvfile'), (req, res) => {
//   console.log(req.body)
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const email = req.body.email;
//   const position = req.body.position;
//   const additionalInfo = req.body.addinfo;
//   const cv = {
//     cv: {
//       data : req.file.filename,
//       contentType: 'cv/pdf'
//     }
//   }
//   const newCareers = new Careers({
//     firstName,
//     lastName,
//     email,
//     position,
//     additionalInfo,
//     cv
//   })

//   newCareers.save()
//   .then(() => res.json('Carrers added!'))
//   .catch(err => res.json('Error: ' + err));
// })


module.exports = router;