/**
 * Created by sampson on 2016/12/25.
 */
var mongoose=require('mongoose');
var Customer=mongoose.model('Customer');
var Order=mongoose.model('Order');
var Address=mongoose.model('Address');
var Billing=mongoose.model('Billing');


//根据订单编号查找订单order
exports.getOrder=function(req,res){
    Order.findOne({_id:req.query.orderId})
        .exec(function(err,order){
            if(err){
                throw err;
            }
            if(!order){
                res.json(404,{msg:'Order Not Found!'});
            }else{
                res.json(order);
            }
        });
};

//查找当前用户名下所属的所有订单orders
exports.getOrders=function(req,res){
    Order.find({userid:'customerA'})
        .exec(function(err,orders){
            if(err){
                throw err;
            }
            if(!orders){
                res.json(404,{msg:'Orders Not Found!'});
            }else{
                res.json(orders);
            }
        });
};

//
exports.getOrder=function(req,res){
    Order.findOne({_id:req.query.orderId})
        .exec(function(err,order){
            if(err){
                throw err;
            }
            if(!order){
                res.json(404,{msg:'Order Not Found!'});
            }else{
                res.json(order);
            }
        });
};

//添加订单信息
exports.addOrder=function(req,res){
    var orderShipping=new Address(req.body.updateShipping);
    var orderBilling=new Billing(req.body.updateBilling);
    var orderItems=req.body.orderItems;

    var newOrder=new Order({
        userid:'customerA',
        items:orderItems,
        shipping:orderShipping,
        billing:orderBilling,
    });

    newOrder.save(function(err,results){
        if(err){
            res.json(500,'Failed to save Order!');
        }else{
            //保存到订单成功后，清空购物车
            Customer.update({userid:'customerA'},{$set:{cart:[]}})
                .exec(function(err,results){
                    if(err||results<1){
                        res.json(404,{msg:'Failed to update Cart!'});
                    }else{
                        res.json({msg:'Order Saved!'});
                    }
                });
        }
    });
};