var express = require('express');
var routers = express.Router();

//item model
const item = require('../models/Item');

//rout-FET api/twitter
//get all item
routers.get('/', (req, res) => {
    item.find()
    .sort({name:-1})
    .then(twitter=>res.json(twitter));
    });

//insert twitter
routers.post('/', (req, res) => {
    const newtwitter = new item({
        name: req.body.name,
        Following:req.body.Following,
        Followers:req.body.Followers,
        Tweets:req.body.Tweets,
        Like:req.body.Like,
        Retweet:req.body.Retweet,
        Comments:req.body.Comments,
        Bio:req.body.Bio,
        name:req.body.name,
        userName:req.body.userName

    });


    newtwitter.save().then(item => res.json(item));
});

//delete request

routers.delete('/:id', (req, res) => {
    item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = routers;
