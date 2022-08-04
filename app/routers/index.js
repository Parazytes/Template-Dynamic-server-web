const express = require('express');
const {
    homeController,
    mainController
} = require('../controllers')

const router = express.Router();

router.get('/', homeController.home)

router.get('/main', mainController.HelloWorld)

router.use((req,res)=>{
    return (res.status(404).render('404'))
})
module.exports = router;