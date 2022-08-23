var express = require("express");
var router = express.Router();
const dogsCtrl = require("../controller/dogs");

router.get("/", dogsCtrl.index);
router.get("/new", dogsCtrl.new);
router.get("/:id", dogsCtrl.show);
router.delete("/:id", dogsCtrl.delete);
router.put("/:id", dogsCtrl.update);
router.post("/", dogsCtrl.create);

module.exports = router;
