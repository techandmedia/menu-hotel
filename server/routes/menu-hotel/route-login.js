const express = require("express");
const router = express.Router();
const mySQL = require("../../config/config-MySQL");

const ho = "hotel-operator";

// ============== Post Login  =======================================
exports.loginAdmin = router.post(`/api/${ho}_login`, (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log("post Login", username, password);
  mySQL.query(
    "SELECT * FROM hotel_operator WHERE username = ?",
    [username],
    function(err, results, fields) {
      console.log("err", err);
      console.log("results", results);
      if (err) {
        res.send({
          code: 400,
          failed: "error ocurred"
        });
      } else {
        if (results.length > 0) {
          if (results[0].password === password) {
            // console.log(JSON.stringify(results));
            res.send(JSON.stringify(results));
            // res.send({
            //   code: 200,
            //   success: "login sucessfull"
            // });
          } else {
            res.send({
              code: 204,
              success: "Email and password does not match"
            });
          }
        } else {
          res.send({
            code: 205,
            success: "Email does not exits"
          });
        }
      }
    }
  );
});

module.exports = router;
