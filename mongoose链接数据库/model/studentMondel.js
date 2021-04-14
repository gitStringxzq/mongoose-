let mongoose = require('mongoose')

//创建一个保安
let stuSchema = mongoose.Schema

//创建规则
let studentsRult = new stuSchema({
    stu_id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String, //限制姓名必须为：字符串
        required:true, //限制姓名为必填项
    },
    age:{
        type:Number, //限制年龄必须为：字符串
        required:true, //限制年龄为必填项
    },
    sex:{
        type:String, //限制性别必须为：字符串
        required:true, //限制性别为必填项
    },
    hobby:[String],
    info:stuSchema.Types.Mixed,
    date:{
        type:Date,
        default:Date.now()
    },
    enable_flag:{
        type:String,
        default:'Y'
    }
})
module.exports = mongoose.model('students',studentsRult);