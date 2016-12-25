/**
 * Created by sampson on 2016/12/25.
 */
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//定义地址模式
const AddressSchema=new Schema({
    name:String,
    address:String,
    city:String,
    state:String,
    zip:String
},{_id:false});

mongoose.model('Address',AddressSchema);

//定义账单模式
const BillingSchema=new Schema({
    cardtype:{type:String,enum:['Visa','MasterCard','Amex']},
    name:String,
    number:String,
    expiremonth:Number,
    expireyear:Number,
    address:[AddressSchema]
},{_id:false});

mongoose.model('Billing',BillingSchema);

//定义产品模式
const ProductSchema=new Schema({
    name:String,
    imagefile:String,
    description:String,
    price:Number,
    instock:Number
});

mongoose.model('Product',ProductSchema);

//定义产品数量模式
const ProductQuantitySchema=new Schema({
    quantity:Number,
    product:[ProductSchema]
},{_id:false});

mongoose.model('ProductQuantity',ProductQuantitySchema);

//定义订单模式
const OrderSchema=new Schema({
    userid:String,
    items:[ProductQuantitySchema],
    shipping:[AddressSchema],
    billing:[BillingSchema],
    status:{type:String,default:'Pending'},
    timestamp:{type:Date,default:Date.now}
});

mongoose.model('Order',OrderSchema);

//定义顾客模式
const Customer=new Schema({
    userid:{type:String,unique:true,required:true},
    shipping:[AddressSchema],
    billing:[BillingSchema],
    cart:[ProductQuantitySchema]
});

mongoose.model('Customer',Customer);