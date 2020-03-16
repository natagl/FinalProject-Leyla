const router = require("express").Router();
const Item = require("../models/Item");
const uploader = require("../config/cloudinary-setup");

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});

router.post("/upload", uploader.single("imageUrl"), (req, res, next) => {
  // console.log('file is: ', req.file)

  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  console.log(req.file, "req dot file");
  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
  res.json({ secure_url: req.file.secure_url });
});

//The server side of : return service.post("/image/create", image)
router.post("/image/create", (req, res, next) => {
  Item.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.get("/all-images", (req, res, next) => {
  Item.find()
    .then(allImagesFromMyDatabase => {
      res.json({ allImagesFromMyDatabase });
    })
    .catch(err => res.json({ err }));
});

//Exporting Router
module.exports = router;
