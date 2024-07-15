const express = require('express')
const UserController = require ('../controller/UserController')
const ProductController = require('../controller/ProductController')
const CategoryController = require('../controller/CategoryController')
const router = express.Router()
const{ChangeUserAuth} = require('../middleware/auth')
const SliderController = require('../controller/SliderController')
const PaymentController = require('../controller/PaymentController')
const OrderController = require('../controller/OrderController')



//usercontroller
router.get('/getalluser', UserController.getalluser)
router.post('/userinsert', UserController.userinsert)
router.post('/loginUser', UserController.loginUser)
router.get('/logout', UserController.logout)
router.post('/updatePassword', ChangeUserAuth, UserController.updatePassword)
router.get('/admin/getUser/:id', UserController.getSingleUser)
router.post('/updateProfile', ChangeUserAuth, UserController.updateProfile)
router.get('/me', ChangeUserAuth, UserController.getUserDetail)
router.get('/admin/deleteUser/:id', UserController.deleteUser)

//CategoryController
router.get('/getAllCategories', CategoryController.display);
router.post('/insertCategory', CategoryController.insert);
router.get('/getCategory/:id',CategoryController.view)
router.put('/updateCategory/:id', CategoryController.update);
router.get('/deleteCategory/:id', CategoryController.delete);


// ProductController
router.get('/products', ProductController.getAllProducts)
router.get('/getProductDetail/:id', ProductController.getProductDetail)
router.get('/product/getAdminProduct', ProductController.getAdminProduct)
router.get('/deleteProduct/:id', ProductController.deleteProduct)
router.post('/product/create', ProductController.createProduct)
router.put ('/productupdate/:id',ProductController.updateProduct)

//SLIDER CONTROLLER
router.get('/slider' , SliderController.display);
router.post('/insertSlider' , SliderController.insert);
router.get('/viewSlider/:id' , SliderController.view);
router.post('/updateSlider/:id' , SliderController.update);
router.delete('/deleteSlider/:id' , SliderController.delete);

//PAYMENT CONTROLLER
router.post('/payment/process', PaymentController.processPayment)
router.get('/stripeapiKey', PaymentController.sendStripeApiKey)

//OrderController
router.post('/order/create',ChangeUserAuth, OrderController.newOrder)
router.get('/order/getSingleOrder/:id',ChangeUserAuth, OrderController.getSingleOrder)
router.get('/order/myOrder',ChangeUserAuth, OrderController.myOrder)
router.get('/order/getAllOrders',ChangeUserAuth, OrderController.getAllOrders)
router.get('/order/deleteOrder/:id', ChangeUserAuth,OrderController.deleteOrder)




module.exports = router