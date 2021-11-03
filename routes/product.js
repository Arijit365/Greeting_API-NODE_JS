const express = require('express');
const router = express.Router();

const {getAllProductsStatic , getAllProducts , getTheConversation } = require('../controllers/product');


router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic)
router.route('/').get(getTheConversation);
module.exports = router;
