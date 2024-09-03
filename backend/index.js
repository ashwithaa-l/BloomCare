const mongoose=require('mongoose');
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
require('dotenv').config();

const PatientRoutes=require('./routes/PatientRoutes');



app.use(cors())
app.use(bodyParser.json());

app.listen(7000,function(){
    console.log('listening on port 7000');
});

try{
   const connectdb = async ()=>{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to database');
   }
   connectdb()
}catch(err){
    console.log(err.message);
}

app.use('/Patient',PatientRoutes);