/**
 * Created by sampson on 2016/12/18.
 */
let mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test');
var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'lichun' });



Cat.findById('585643ddde1c6507bc995617', function (err, tank) {
    if (err) return handleError(err);

    console.log(tank)
});
Cat.update({_id: '585643ddde1c6507bc995617'}, {$set:{name: 'hello word'}},function (err, tank) {
    if (err) return handleError(err);

    console.log(tank)
});