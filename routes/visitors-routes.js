const router = require("express").Router();

// GET — api/visitors/kennels

const Kennels = require("../modules/kennels-module.js")
router.get('/kennels', (req, res) => {
  Kennels.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => { 
      res.status(500).json({ message: "Failed to get Kennels", error: err });
    });
});

// GET api/visitors/kennels/:id

router.get('/kennels/:id', (req, res) => { 
    Kennels.findById(req.params.id)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to get Kennel", error: err });
      });
  });

module.exports = router;