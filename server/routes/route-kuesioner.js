const express = require("express");
const router = express.Router();
const mySQL = require("../config/config-MySQL");

const rs = "responden";
const pt = "penilaian_teladan";
const ps = "penilaian_sendiri";
const us = "users";
const pp = "penilaian_penilai";
const pp2 = "penilaian_penilai2";
const per = "pertanyaan";

// ============== Get User ================================
exports.getUser = router.get(`/api/${us}/:id`, (req, res) => {
  // console.log(req.params);
  mySQL.query(
    `SELECT * FROM ${us} WHERE nip_nim=?`,
    [req.params.id],
    (err, results) => {
      if (err) console.log(err);
      res.send(JSON.stringify(results));
    }
  );
});

// ============== Get Users =====================
exports.getUsers = router.get(`/api/${us}`, (req, res) => {
  mySQL.query(`SELECT * FROM ${us}`, (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

// ============== Get Responden ================================
exports.getResponden = router.get(`/api/${rs}/:id`, (req, res) => {
  mySQL.query(
    `SELECT * FROM ${rs} WHERE responden_id=?`,
    [req.params.id],
    (err, results) => {
      if (err) console.log(err);
      res.send(JSON.stringify(results));
    }
  );
});

exports.getRoleID = router.get(`/api/role/:id`, (req, res) => {
  // console.log(req.params);
  mySQL.query(
    `SELECT * FROM role WHERE role_id=?`,
    [req.params.id],
    (err, results) => {
      if (err) console.log(err);
      res.send(JSON.stringify(results));
    }
  );
});

// ============== Get Responden ================================
exports.getRespondens = router.get(`/api/${rs}`, (req, res) => {
  mySQL.query(`SELECT * FROM ${rs}`, (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

// ============== Get Responden ================================
exports.getResponden = router.post(`/api/${rs}/${rs}`, (req, res) => {
  // console.log("tes", req.body.full_name);
  var full_name = req.body.full_name;
  mySQL.query(
    `SELECT re.user_id,re.nip_nim ,re.full_name, r.role_name FROM responden re INNER JOIN role r ON re.role_id = r.role_id where re.full_name=?`,
    [full_name],
    (err, results) => {
      console.log(results);
      if (err) console.log(err);
      res.send(JSON.stringify(results));
    }
  );
});

// ============== Get Soal ====================================
exports.getSoal = router.get(`/api/soal`, (req, res) => {
  mySQL.query(`SELECT * FROM soal`, (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

// ============== Get Jabatan ====================================
exports.getRole = router.get(`/api/role`, (req, res) => {
  mySQL.query(`SELECT * FROM role`, (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

// ============== Post Responden ================================
exports.postResponden = router.post(`/api/${rs}_new`, (req, res, next) => {
  const postData = req.body;
  // console.log(postData)
  mySQL.query(`INSERT INTO ${rs} SET ?`, postData, (err, results, fields) => {
    if (!err) {
      res.send({
        code: 200,
        status: "successfuly added a user"
        // message: JSON.stringify(results)
      });
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

// ============== Get Detil Penilaian ================================
exports.getResponden = router.post(`/api/${pp}/${pp}`, (req, res) => {
  // console.log("tes", req.body.full_name);
  var full_name = req.body.nip_nim;
  mySQL.query(
    `SELECT us.nip_nim, us.name,pe.p1,pe.p2,pe.p3, pe.p4, pe.total FROM penilaian_penilai pe INNER JOIN users us ON pe.nip_nim = us.nip_nim WHERE pe.nip_nim=?`,
    [full_name],
    (err, results) => {
      console.log(results);
      if (err) console.log(err);
      res.send(JSON.stringify(results));
    }
  );
});

// ============== Get Penilaian Penilai ================================
exports.getPenilaian1 = router.get(`/api/${pp}`, (req, res) => {
  mySQL.query(
    `SELECT us.nip_nim, us.name, pe.total, pe.hasil FROM penilaian_penilai pe INNER JOIN users us ON pe.nip_nim = us.nip_nim ORDER BY pe.total DESC`,
    (err, results) => {
      if (err) console.log(err);
      res.send(JSON.stringify(results));
    }
  );
});

// ============== Get Raw Hasil Pertanyaan ================================
exports.getPertanyaan = router.get(`/api/${per}`, (req, res) => {
  mySQL.query(`SELECT * FROM ${per}`, (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

// ============== Post Penilaian Sendiri ================================
exports.postOffice = router.post(`/api/${ps}_new`, (req, res, next) => {
  const postData = req.body;
  console.log("169", postData);
  mySQL.query(`INSERT INTO ${ps} SET ?`, postData, (err, results, fields) => {
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

// ============== Post Penilaian Penilai ================================
exports.postTeladan = router.post(`/api/${pp}_new`, (req, res, next) => {
  const postData = req.body;
  // console.log(postData)
  mySQL.query(`INSERT INTO ${pp} SET ?`, postData, (err, results, fields) => {
    if (!err) {
      res.send({
        code: 200,
        status: "successfuly added penilaian penilai"
        // message: JSON.stringify(results)
      });
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

// ============== Post Responden  =======================================
exports.postResponden = router.post(`/api/${rs}_new`, (req, res, next) => {
  const postData = req.body;
  // console.log("post Responden", postData);
  mySQL.query(`INSERT INTO ${rs} SET ?`, postData, (err, results, fields) => {
    if (!err) {
      res.send({
        code: 200,
        status: "successfuly added responden"
        // message: JSON.stringify(results)
      });
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

// exports.getHome = router.get("/api/kuesioner", (req, res) => {
//   mySQL.query(`SELECT * FROM ${us}`, (err, results) => {
//     if (err) console.log(err);
//     console.log("success");
//     res.send(JSON.stringify(results));
//   });
// });

// ============== Get Penilaian Teladan ================================
// exports.getTeladan = router.get(`/api/${pt}`, (req, res) => {
//   mySQL.query(`SELECT * FROM ${pt} ORDER BY total_nilai`, (err, results) => {
//     if (err) console.log(err);
//     res.send(JSON.stringify(results));
//   });
// });

// ============== Get Penilaian Penilai2 ================================
// exports.getPenilaian2 = router.get(`/api/${pp2}`, (req, res) => {
//   mySQL.query(`SELECT * FROM ${pp2}`, (err, results) => {
//     if (err) console.log(err);
//     res.send(JSON.stringify(results));
//   });
// });

// ============== Post Teladan ================================
// exports.postTeladan = router.post(`/api/${pt}_new`, (req, res, next) => {
//   const postData = req.body;
//   // console.log(postData)
//   mySQL.query(`INSERT INTO ${pt} SET ?`, postData, (err, results, fields) => {
//     if (!err) {
//       res.send({
//         code: 200,
//         status: "successfuly added teladan"
//         // message: JSON.stringify(results)
//       });
//     } else {
//       console.log(err);
//       res.send(err);
//     }
//   });
// });

// // ============== Delete Company ================================
// exports.deleteCompany = router.delete(`/api/${pc}_delete/:id`, (req, res) => {
//   const conDeleteData = { id: req.params.id };
//   const idToDelete = req.params.id;
//   mySQL.query(
//     `DELETE FROM ${pc} WHERE company_id=?`,
//     [idToDelete, conDeleteData],
//     (err, results, fields) => {
//       if (!err) {
//         res.send({
//           code: 200,
//           status: "successfuly deleted company"
//           // message: JSON.stringify(results)
//         });
//       } else {
//         console.log(err);
//         res.send(err);
//       }
//     }
//   );
// });

// // ============== Delete Office ================================
// exports.deleteOffice = router.delete(`/api/${po}_delete/:id`, (req, res) => {
//   const conDeleteData = { id: req.params.id };
//   const idToDelete = req.params.id;
//   mySQL.query(
//     `DELETE FROM ${po} WHERE office_id=?`,
//     [idToDelete, conDeleteData],
//     (err, results, fields) => {
//       if (!err) {
//         res.send({
//           code: 200,
//           status: "successfuly deleted office"
//           // message: JSON.stringify(results)
//         });
//       } else {
//         console.log(err);
//         res.send(err);
//       }
//     }
//   );
// });

// // ============== Delete Office's Branch ===========================
// exports.deleteBranch = router.delete(`/api/${po}b_delete/:id`, (req, res) => {
//   const conDeleteData = { id: req.params.id };
//   const idToDelete = req.params.id;
//   mySQL.query(
//     `DELETE FROM ${po} WHERE company_id=?`,
//     [idToDelete, conDeleteData],
//     (err, results, fields) => {
//       if (!err) {
//         res.send({
//           code: 200,
//           status: "successfuly deleted office"
//           // message: JSON.stringify(results)
//         });
//       } else {
//         console.log(err);
//         res.send(err);
//       }
//     }
//   );
// });

module.exports = router;
