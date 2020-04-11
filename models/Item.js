 const mongoose = require('mongoose');
 const schema = mongoose.Schema;

 const itemSchema = new schema({
      Following: {
         type: String,
        
     },
     Followers: {
         type: String
     },
     Tweets: {
         type: String
     },
     Like: {
         type: String
     },
     Retweet: {
         type: String
     },
     Comments: {
         type: String
     },
     Bio:{
         type:String
     },
     name:{
         type:String
     },
     userName:{
         type:String
     }

 });

 module.exports = Item = mongoose.model('item', itemSchema);
