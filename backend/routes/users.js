var express = require('express');
var router = express.Router();
const userModel = require('../models/user')
const { Op } = require("sequelize");

/* GET users listing. */
router.get('/', function(req, res, next) {
  let result=[
    {
      name:'天幕固定器',
      price:'24.50',
      buyer:62,
      comment:50,
    },
    {
      name:'户外安全锤',
      price:'19.90',
      buyer:48,
      comment:244,
    },
  ]
  return res.status(200).json(result)
});

router.post('/login', async function(req, res, next) {
  let {name,password} = req.body
  let user = await userModel.findOne({
    where:{
      name:name
    }
  })
  if (user != null){
    if(user.password != password){
      return res.status(400).json('密码错误')
    }else{
      return res.status(200).json('登录成功')
    }
  }else{
    return res.status(400).json('用户没找到')
  }
  // if(name=='root'&&password=='root'){
  //   return res.status(200).json('success');
  // }else{
  //   return res.status(200).json('failed');
  // }

});

router.post('/signup', async function(req, res, next) {
  let {name,password} = req.body
  console.log('name='+name)
  console.log('password='+password)
  // 1 find user check name
  let [user,created] = await userModel.findOrCreate({
    where:{name,},
    defaults:{password,},
  })

  if(created==false){ // 已经被注册了
    return res.status(400).json('已经被注册了');
  }else{
    return res.status(200).json(user);
  }

  
});

router.put('/', async function(req, res, next) {
  let {name} = req.body

  let result = await userModel.findAll({
    where:{
      // name:{[Op.in]: ['name2', 'name3', 'name5'],}
      [Op.or]: [
        {name:'name2'},
        {password:'1234'},
      ],

    }
  })
  return res.status(200).json(result);


});

router.delete('/', function(req, res, next) {
  let {name} = req.body

  return res.status(200).json('delete'+name);


});

module.exports = router;
