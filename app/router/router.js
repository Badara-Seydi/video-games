const express = require('express');

const router = express.Router();



const mainController = require('../controllers/mainController');


router.get('/', mainController.homePage);
router.get('/new' , mainController.addGameView);
router.post('/new' , mainController.addGame);
router.get ('/:id' , mainController.oneGamePage);
router.get('/delete/:id' , mainController.deleteOneGame);
router.delete('/delete/:id' , mainController.deleteOneGame)

module.exports = router;