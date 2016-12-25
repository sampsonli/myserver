/**
 * Created by sampson on 2016/12/25.
 */
var mongoose=require('mongoose');
var Customer=mongoose.model('Customer');
var Address=mongoose.model('Address');
var Billing=mongoose.model('Billing');

//查找当前顾客的有关信息
exports.getCustomer=function(req,res){
    Customer.findOne({userid:'customerA'})
        .exec(function(err,customer){
            if(err){
                throw err;
            }
            if(!customer){
                // res.json(404,{msg:'Customer Not Found!'});
                res.status(404).json({msg:'Customer Not Found!'});
            }else{
                // res.json(customer);
                res.status(200).json(customer);
            }
        });
};

//更新发货信息
exports.updateShipping=function(req,res){
    var newShipping=new Address(req.body.updatedShipping);
    Customer.update({userid:'customerA'},{$set:{'shipping':[newShipping.toObject()]}})
        .exec(function(err,results){
            if(err||results<1){
                // res.json(404,{msg:'Failed to update Shipping!'});
                res.status(404).json({msg:'Failed to update Shipping!'});
            }else{
                // res.json({msg:'Customer Shipping Updated!'});
                res.status(200).json({msg:'Customer Shipping Updated!'});
            }
        });
};

//更新支付信息
exports.updateBilling=function(req,res){
    //你可以在此验证信用卡信息，并在信用卡无效时取消结账
    var newBilling=new Billing(req.body.updatedBilling);
    Customer.update({userid:'customerA'},{$set:{'billing':[newBilling.toObject()]}})
        .exec(function(err,results){
            if(err||results<1){
                // res.json(404,{msg:'Failed to update Billing!'});
                res.status(404).json({msg:'Failed to update Billing!'});
            }else{
                // res.json({msg:'Customer Billing Updated!'});
                res.status(200).json({msg:'Customer Billing Updated!'});
            }
        });
};

//更新购物车
exports.updateCart=function(req,res){
    Customer.update({userid:'customerA'},{$set:{'cart':req.body.updatedCart}})
        .exec(function(err,results){
            if(err||results<1){
                // res.json(404,{msg:'Failed to update Cart!'});
                res.status(404).json({msg:'Failed to update Cart!'});
            }else{
                // res.json({msg:'Customer Cart Updated!'});
                res.status(200).json({msg:'Customer Cart Updated!'});
            }
        });
};