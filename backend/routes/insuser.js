var express = require('express');
var router = express.Router();
const usersModel = require('../models/ins')

router.post('/signup', async function(req, res, next){
    let {phoneOrEmail,fullName,userName,password} = req.body
    let [users,created] = await usersModel.findOrCreate({
        where:{

        }
    })

    if(created==false){ // 已经被注册了
        return res.status(400).json('Already have account');
      }else{
        return res.status(200).json(user);
      }
})