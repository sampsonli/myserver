/**
 * Created by sampson on 2016/12/25.
 */
var mongoose=require('mongoose');
var Product=mongoose.model('Product');


exports.getProduct=function(req,res){
    Product.findOne({_id:req.query.productId})
        .exec(function(err,product){
            if(err){
                throw err;
            }
            if(!product){
                res.json(404,{msg:'Product Not Found!'});
            }else{
                res.json(product);
            }
        });
};

exports.getProducts=function(req,res){
    Product.find()
        .exec(function(err,products){
            if(err){
                throw err;
            }
            if(!products){
                res.json(404,{msg:'Products Not Found!'});
            }else{
                res.json(products);
            }
        });
};