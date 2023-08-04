const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/allusers', userController.getAllUsers);
router.get('/searchbydni/:dni', userController.searchByDni);
router.post('/createuser', userController.createUser);
router.put('/edituser/:dni', userController.editUser);
router.delete('/deleteuser/:dni', userController.deleteUser)

module.exports = router