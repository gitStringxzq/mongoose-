//引入第三方库
let mongoose = require('mongoose')
mongoose.set('useCreateIndex',true)

//引入数据库链接
let db = require('./db/db')
//引入模型对象
let stumodel = require('./model/studentMondel')


db(function (err){
   if (err){
       console.log(err)
   }else{
       stumodel.create({
           stu_id:'002',
           name:'徐文强',
           age:18,
           sex:'男',
           hobby:['女','篮球'],
           info:'喜欢库里'
       },function (err,data){
           if (err){
               console.log('写入失败',err);
           }else{
               console.log('写入成功',data);
           }
       })
   }
})

