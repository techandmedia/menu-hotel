const express = require("express");
const router = express.Router();
const mySQL = require("../../config/config-MySQL");

const hr = "hotel_reservation";

exports.getReservations = router.get(`/api/${hr}`, (req, res) => {
  mySQL.query(`SELECT * FROM ${hr}`, (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

module.exports = router;