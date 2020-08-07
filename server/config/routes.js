const express=require('express')
const router=express.Router()

const {authenticateUsers}=require('../app/middleware/authenticateUser')

//user authentication
router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/accounts',authenticateUsers,usersController.account)

module.exports=router