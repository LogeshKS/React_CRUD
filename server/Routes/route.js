const express = require('express');
const businessRoutes = express.Router();

// Require Business model in our routes module
let User = require('../DB/userModel');
    
// Defined store route
businessRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(user => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    User.find(function(err, data){
    if(err){
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, data){
      res.json(data);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function(err, data) {
    if (!data)
      res.status(404).send("data is not found");
    else {
        data.firstName = req.body.firstName;
        data.lastName = req.body.lastName;
        data.mobNo = req.body.mobNo;

        data.save().then(data => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, data){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;