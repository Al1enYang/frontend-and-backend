var express = require('express');
var router = express.Router();
const taobaoModel = require('../models/taobao')

/* GET home page. */
router.post('/add', async function(req, res, next) {
  let {name} = req.body    //recive product name from frontend
  console.log('name='+name)
  // 1 find user check name
  let [product,created] = await taobaoModel.findOrCreate({
    where:{name:name},
  })

  if(created==false){ // already have the product
    return res.status(400).json('Already have the product');
  }else{
    return res.status(200).json(product);
  }
});


router.post('/header', async function(req, res, next) {
  console.log('header')
  let {searchname} = req.body
  let product = await taobaoModel.findOne({
    where:{
      name:searchname
    }
  })
  if (product != null){
    if(product.name != searchname){
      return res.status(400).json('Wrong product name')
    }else{
      return res.status(200).json('Product search succeeded')
    }
  }else{
    return res.status(400).json('Product was not found')
  }
});




module.exports = router;
