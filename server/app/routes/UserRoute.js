const express = require('express');
const router = express.Router();
const { UserController }= require('../controllers/UserController')

//Se crea clase Controller y se llaman a los métodos de esa clase
var userController = new UserController;

router.post('/user', userController.create);
router.get('/user/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;