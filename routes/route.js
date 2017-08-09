const express = require('express');
const router = express.Router();

//const SvgUpload = require('../models/svgupload');
const Contact = require('../models/contacts');

router.get('/contacts', (req, res, next) => {
    res.send('retrieving contacts');
});

router.post('/add', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, Contact) => {
        if (err) {
            res.json({
                msg: 'failed to add contact'
            });
        } else {
            res.json({
                msg: 'added'
            });
        }
    });

});

router.delete('/delete/:id', (req, res, next)=>{
    Contact.remove({
        _id: req.params.id
    }, function (err, result){
        if (err) {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

router.post('/upload', (req, res, next)=>{
    let newContent = new SvgUpload({
        content: req.body.content
    })
    newContent.save((err, SvgUpload)=>{
        if(err){
            res.json({
                msg: 'failed to upload'
            });
        }
        else{
            res.json({
                msg: 'success'
            });
        }
    });
});

module.exports = router;
