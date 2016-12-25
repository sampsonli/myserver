/**
 * Created by sampson on 2016/12/25.
 */
var express=require('express');
var customers=require('../controllers/customer');
var products=require('../controllers/product');
var orders=require('../controllers/order');

var router = express.Router();

//商品
router.get('/products/get',products.getProducts);

//订单
router.get('/orders/get',orders.getOrders);
router.post('/orders/add',orders.addOrder);

//顾客
router.get('/customers/get',customers.getCustomer);
router.post('/customers/update/shipping',customers.updateShipping);
router.post('/customers/update/billing',customers.updateBilling);
router.post('/customers/update/cart',customers.updateCart);

module.exports = router