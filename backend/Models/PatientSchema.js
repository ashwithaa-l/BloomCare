const mongoose=require('mongoose');

const PatientSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
    },
    // email:{
    //     type:String,
    //     unique:true
    // },
    password:{
        type:String
    }
})
const Patient=mongoose.model('Patient',PatientSchema);

module.exports={Patient};