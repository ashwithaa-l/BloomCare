const mongoose=require('mongoose')
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app = express()
const patientRoutes = require('./routes/PatientRoutes')

app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

async function connecttodb(){
    try{
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log('db connected')
    
    app.listen(7000,function(){
        console.log('listening on port 7000')
    })
}catch(error){
    console.log(error)
    console.log('couldn\'t connect to')
}
}

app.get('/',(req, res)=>{
    res.status(200).json("hello world")
})


app.use('/patient',patientRoutes);

connecttodb()
