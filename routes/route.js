const express = require('express');
const router = express.Router();
const path = require('path');
//
//router.use(function timeLog (req, res, next) {
//  console.log('Time: ', Date.now())
//  next()
//})
//const SvgUpload = require('../models/svgupload');
//const Contacts = require('../models/contacts');
//var ContactsModel = mongoose.model('Contacts');

//router.get('/contacts', (req, res){
////    res.send('retrieving contacts');
//    ContactsModel.find(function(err,Contacts){
//        if(err){
//            console.log(err)
//        }
//        else{
//            console.log(Contacts)
//        }
//    })
//});
router.get('/svg', function(req, res){
    res.sendFile(path.join(__dirname+'/tempPict.html'));
});
//
//router.post('/add', function (req, res){
//    console.log(req.body.first_name + " " + req.body.last_name)
//    console.log(req.query.first_name)
//    let newContact = new Contacts({
//        first_name: req.query.first_name,
//        last_name: req.query.last_name,
//        phone: req.query.phone
//    });
//
//    newContact.save((err, Contacts) => {
//        if (err) {
//            res.json({
//                msg: err
//            });
//        } else {
//            res.json({
//                msg: 'added'
//            });
//        }
//    });
////            res.send('got post')
//
//})
//
//router.delete('/delete/:id', (req, res, next)=>{
//    Contact.remove({
//        _id: req.params.id
//    }, function (err, result){
//        if (err) {
//            res.json(err);
//        }
//        else{
//            res.json(result);
//        }
//    });
//});
//
//router.post('/upload', (req, res, next)=>{
//    let newContent = new SvgUpload({
//        content: req.body.content
//    })
//    newContent.save((err, SvgUpload)=>{
//        if(err){
//            res.json({
//                msg: 'failed to upload'
//            });
//        }
//        else{
//            res.json({
//                msg: 'success'
//            });
//        }
//    });
//});

module.exports = router;
