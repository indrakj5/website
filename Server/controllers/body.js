const BodyModel = require('../models/body');
const mongoose = require('mongoose');

class BodyController {
  static getBody (req,res) {
    BodyModel.find({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };

  static postBody (req,res) {
    BodyModel.create({
      home1: req.body.home1,
      home2: req.body.home2,
      about1: req.body.about1,
      about2: req.body.about2,
      about3: req.body.about3,
      about4: req.body.about4,
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };
};

module.exports = BodyController;