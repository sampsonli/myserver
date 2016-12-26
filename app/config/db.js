/**
 * Created by sampson on 2016/12/25.
 */
import mongoose from 'mongoose'
import fs from 'fs'
import path from 'path'
// mongoose.connect('mongodb://localhost:27017/test');
mongoose.Promise = global.Promise;
const models = path.join(__dirname, '../models');

fs.readdirSync(models)
    .filter(file => ~file.search(/^[^\.].*\.js$/))
    .forEach(file => require(path.join(models, file)));