<<<<<<< HEAD
const mongoose=require('mongoose');
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
require('dotenv').config();

const PatientRoutes=require('./routes/PatientRoutes');


=======
const mongoose=require('mongoose')
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app = express()
const patientRoutes = require('./routes/PatientRoutes')
>>>>>>> bc3c0509678b6138b5a182c6e13cbb1b14b6f5ea

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

<<<<<<< HEAD
app.use('/Patient',PatientRoutes);
=======
app.use('/patient',patientRoutes);

connecttodb()
>>>>>>> bc3c0509678b6138b5a182c6e13cbb1b14b6f5ea
