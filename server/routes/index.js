const router = require('express').Router();
const controllers = require('../controllers/index');


router.get('/search', controllers.search);

module.exports = router;
