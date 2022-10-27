const express = require('express');
const router = express.Router();
const passport = require('passport');

const productController = require('../../../controllers/api/v1/products_api');

router.get('/',passport.authenticate('jwt',{session:false}),productController.products);
router.post('/create',passport.authenticate('jwt',{session:false}),productController.create);
router.delete('/:id',passport.authenticate('jwt',{session:false}),productController.delete);
router.post('/:id/update_quantity',passport.authenticate('jwt',{session:false}),productController.update);

module.exports = router;