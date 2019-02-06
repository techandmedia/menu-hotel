const express = require("express");
const router = express.Router();
const mySQL = require("../config/config-MySQL");

const pc = "prospace_companies";
const po = "prospace_offices";

exports.getHome = router.get("/myhome", (req, res) => {
  console.log("success",req.body);
  res.send(JSON.stringify("Berhasil konek"));
  // mySQL.query(`SELECT * FROM ${pc}`, (err, results) => {
  //   if (err) console.log(err);
  //   console.log("success");
  //   res.send(JSON.stringify(results));
  // });
});

// ============== Get Companies ================================
exports.getCompanies = router.get(`/api/${pc}`, (req, res) => {
  mySQL.query(`SELECT * FROM ${pc} ORDER BY company_name`, (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

// ============== Get Offices ================================
exports.getCompanies = router.get(`/api/${po}`, (req, res) => {
  mySQL.query(`SELECT * FROM ${po}`, (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

// ============== Put Companies ================================
exports.putCompany = router.put(`/api/${pc}_update/:id`, (req, res) => {
  console.log(req.body);
  mySQL.query(
    //perhatikan penulisan tanda baca pada query, kurang atau kelebihan tanda koma
    //maka akan dapat menyebabkan syntax error, atau kurang field
    `UPDATE ${pc} SET company_name=?, revenue=?, phone_country_code=?, phone_number=?, WHERE company_id=?`,
    [
      req.body.company_name,
      req.body.revenue,
      req.body.phone_country_code,
      req.body.phone_number,
      req.params.id
    ],
    (err, results, fields) => {
      if (!err) {
        res.send({
          code: 201,
          status: "successfuly edited company"
          // message: JSON.stringify(results)
        });
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});

// ============== Put Offices ================================
exports.putCompany = router.put(`/api/${po}_update/:id`, (req, res) => {
  console.log(req.body);
  mySQL.query(
    //perhatikan penulisan tanda baca pada query, kurang atau kelebihan tanda koma
    //maka akan dapat menyebabkan syntax error, atau kurang field
    `UPDATE ${po} SET office_name=?, latitude=?, log=?, start_date=?, WHERE office_id=?`,
    [
      req.body.office_name,
      req.body.latitude,
      req.body.log,
      req.body.start_date,
      req.params.id
    ],
    (err, results, fields) => {
      if (!err) {
        res.send({
          code: 201,
          status: "successfuly edited office"
          // message: JSON.stringify(results)
        });
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});

// ============== Post Companies ================================
exports.postCompany = router.post(`/api/${pc}_new`, (req, res, next) => {
  const postData = req.body;
  // console.log(postData)
  mySQL.query(`INSERT INTO ${pc} SET ?`, postData, (err, results, fields) => {
    if (!err) {
      res.send({
        code: 200,
        status: "successfuly added company"
        // message: JSON.stringify(results)
      });
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

// ============== Post Offices ================================
exports.postOffice = router.post(`/api/${po}_new`, (req, res, next) => {
  const postData = req.body;
  // console.log(postData)
  mySQL.query(`INSERT INTO ${po} SET ?`, postData, (err, results, fields) => {
    if (!err) {
      res.send({
        code: 200,
        status: "successfuly added office"
        // message: JSON.stringify(results)
      });
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

// ============== Delete Company ================================
exports.deleteCompany = router.delete(`/api/${pc}_delete/:id`, (req, res) => {
  const conDeleteData = { id: req.params.id };
  const idToDelete = req.params.id;
  mySQL.query(
    `DELETE FROM ${pc} WHERE company_id=?`,
    [idToDelete, conDeleteData],
    (err, results, fields) => {
      if (!err) {
        res.send({
          code: 200,
          status: "successfuly deleted company"
          // message: JSON.stringify(results)
        });
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});

// ============== Delete Office ================================
exports.deleteOffice = router.delete(`/api/${po}_delete/:id`, (req, res) => {
  const conDeleteData = { id: req.params.id };
  const idToDelete = req.params.id;
  mySQL.query(
    `DELETE FROM ${po} WHERE office_id=?`,
    [idToDelete, conDeleteData],
    (err, results, fields) => {
      if (!err) {
        res.send({
          code: 200,
          status: "successfuly deleted office"
          // message: JSON.stringify(results)
        });
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});

// ============== Delete Office's Branch ===========================
exports.deleteBranch = router.delete(`/api/${po}b_delete/:id`, (req, res) => {
  const conDeleteData = { id: req.params.id };
  const idToDelete = req.params.id;
  mySQL.query(
    `DELETE FROM ${po} WHERE company_id=?`,
    [idToDelete, conDeleteData],
    (err, results, fields) => {
      if (!err) {
        res.send({
          code: 200,
          status: "successfuly deleted office"
          // message: JSON.stringify(results)
        });
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});

module.exports = router;
