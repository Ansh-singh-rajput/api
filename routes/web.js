const express = require('express')
const UserController = require ('../controller/UserController')
const ProductController = require('../controller/ProductController')
const CategoryController = require('../controller/CategoryController')
const router = express.Router()
const{ChangeUserAuth} = require('../middleware/auth')



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
router.get('/getAllCategories', CategoryController.view);
router.post('/insertCategory', CategoryController.insert);
router.get('/getCategory/:id', CategoryController.display);
router.put('/updateCategory/:id', CategoryController.update);
router.get('/deleteCategory/:id', CategoryController.delete);


// ProductController
router.get('/products', ProductController.getAllProducts)
router.get('/getProductDetail/:id', ProductController.getProductDetail)
router.get('/product/getAdminProduct', ProductController.getAdminProduct)
router.get('/product/deleteProduct/:id', ProductController.deleteProduct)
router.post('/product/create', ProductController.createProduct)
router.put ('/productupdate/:id',ProductController.updateProduct)



module.exports = router