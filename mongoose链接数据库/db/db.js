let mongoose = require('mongoose')

const IP_NAME = 'localhost'
const IP = '27017'
const DB_NAME = 'demo'



module.exports = function (callback){
    // 链接数据库
    mongoose.connect(`mongodb://${IP_NAME}:${IP}/${DB_NAME}`,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
    )
//绑定数据库监听
    mongoose.connection.on('open',function (err){
        if (err){
            console.log('失败',err);
            callback('操作失败')
        }else{
            console.log('成功链接');
            callback()
        }
    })
}

