const router = require("express").Router();
const Item = require("../models/Item");

router.post("/createItem", (req, res) => {
  console.log("hello im in the back ", req.body);
  Item.create(req.body)
    .then(responseFromDB => res.json(responseFromDB))
    .catch(err => console.log(err));
});

router.get("/showItem", (req, res) => {
  console.log("show item ");
  Item.find()
    .then(responseFromDB => res.json(responseFromDB))
    .catch(err => console.log(err));
});

module.exports = router;
