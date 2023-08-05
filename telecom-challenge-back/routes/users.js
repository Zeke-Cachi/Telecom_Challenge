const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const editCheck = require("../middleware/editCheck");
const validateCheck = require("../middleware/validateCheck");
const createCheck = require("../middleware/createCheck");

router.get("/allusers", userController.getAllUsers);
router.get("/searchbydni/:dni", userController.searchByDni);
router.post(
  "/createuser",
  createCheck,
  validateCheck,
  userController.createUser
);
router.put("/edituser/:dni", editCheck, validateCheck, userController.editUser);
router.delete("/deleteuser/:dni", userController.deleteUser);

module.exports = router;
