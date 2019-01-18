const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const port = 27017;
const db = "mongodb://localhost:27017/swiggyDB";
const userModel = require('../models/login');
const Food = require('../models/food');


mongoose.Promise = global.Promise;

mongoose.connect(db,
  (err) => {

    if (err) {
      throw err;
    }
    else {
      console.log(`connected to port ${port} to database`);
    }

  },
  { useNewUrlParser: true });

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  userModel.findOne({ username: username, password: password }, (err, user) => {

    if (err) throw err;

    else {
      // console.log("retreiving values"+user);

      if (user) {
        console.log("user exists");
        res.json({ userDetails: user, loggedIn: true })
      }
      else {

        res.json({ userDetails: user, loggedIn: false })


        //   //adding new user if not exists
        //  console.log('adding new user');
        //   let newUser = new userModel({
        //     username: req.body.username,
        //     password: req.body.password
        //   })
        //   newUser.save((err, user) => {
        //     if (err)
        //       res.json({ msg: 'Failed to add contact' + err })
        //     else
        //       // res.json({msg:'added new contact'})
        //       res.json({ userDetails: user, loggedIn: false })
        //   })

      }
    }
  });
});

router.get('/food', (req, res) => {
  // console.log('retreiving food items');
  
  Food.find((err, data) => {
    // console.log('data is '+data);
    res.json(data);
  });
});

router.post('/addUser',(req,res)=>{
  let newUser=new userModel({
    username:req.body.username,
    password:req.body.password
  })
  newUser.save((err,user)=>{
    if(err)
    {
      res.json({msg:'failed to add user'+err})
    }
    else{
    res.json({msg:'added new user'})
    }
  })
});

router.get('/showAll',(req,res)=>{
  userModel.find((err,data)=>{
    res.json(data);
  })
});


module.exports = router;