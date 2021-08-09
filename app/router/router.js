const express = require('express');

const router = express.Router();



const mainController = require('../controllers/mainController');
const adminController = require('../controllers/adminController')


router.get('/', mainController.homePage);
router.get('/signin' , adminController.signInView);
router.post('/signin' , adminController.signIn);
router.get('/login',adminController.justLog);
router.post('/login',adminController.justLogIn);
router.get('/new' , mainController.addGameView);
router.post('/new' , mainController.addGame);
router.get('/delete/:id' , mainController.deleteOneGame);
router.delete('/delete/:id' , mainController.deleteOneGame);
router.get ('/:id' , mainController.oneGamePage);

module.exports = router;