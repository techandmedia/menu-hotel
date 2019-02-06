const express = require("express");
const router = express.Router();
const mySQL = require("../../config/config-MySQL");

const rs = "responden";
const ad = "admin";

// ============== Post Login  =======================================
exports.loginAdmin = router.post(`/api/${ad}_login`, (req, res, next) => {
  const admin_name = req.body.admin_name;
  const admin_pass = req.body.admin_pass;
  // console.log("post Login", admin_name, admin_pass);
  mySQL.query(`SELECT * FROM ${ad} WHERE admin_name=?`, [admin_name], function(
    err,
    results,
    fields
  ) {
    if (err) {
      res.send({
        code: 400,
        failed: "error ocurred"
      });
    } else {
      if (results.length > 0) {
        if (results[0].admin_pass === admin_pass) {
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
  });
});

// ============== Post Login  =======================================
exports.loginResponden = router.post(`/api/${rs}_login`, (req, res, next) => {
  const nip_nim = req.body.nip_nim;
  const password= req.body.password;
  // console.log("post Login", admin_name, admin_pass);
  mySQL.query(`SELECT * FROM ${rs} WHERE nip_nim=?`, [nip_nim], function(
    err,
    results,
    fields
  ) {
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
  });
});

module.exports = router;
