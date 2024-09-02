const mongoose=require('mongoose')
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app = express()
const patientRoutes = require('./routes/PatientRoutes')

app.use(cors())
app.use(bodyParser.json())
async function connecttodb(){
    try{
        await mongoose.connect('mongodb+srv://EDII:ashwithaa@cluster0.gwnlctj.mongodb.net/recipe?retryWrites=true&w=majority&appName=Cluster0')
        console.log('db connected')
    
    app.listen(7000,function(){
        console.log('listening on port 7000')
    })
}catch(error){
    console.log(error)
    console.log('couldn\'t connect to')
}
}

app.use('/patient',patientRoutes);

connecttodb()