/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    // let query = `SELECT * FROM maps`;
    // console.log(query);
    // db.query(query)
    //   .then(data => {
    //     const maps = data.rows;
    //     res.render("./views/maps.ejs")
    //   })
    //   .catch(err => {
    //     res
    //       .status(500)
    //       .json({ error: err.message });
    //   });
    // const templateVars = {
    //   userObject: req.header
    // };
    
    const nameClient = getElementById("#table-rows").value;
    console.log(nameClient);
    res.render("map_view");
  });
  // router.post("/", (req, res) => {
  //   // If the e-mail or password are empty strings,
  //   // const name = req.body;
  //   // const address = req.body;
  //   // const nameClient = document.getElementById("table-rows").value;
  //   // console.log(name, address, nameClient);
  //     // res.redirect('/');
  //   } 
  // );
  return router;
};
