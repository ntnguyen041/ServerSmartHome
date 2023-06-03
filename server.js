const express =require('express');
const http =require('http')
const mongoose=require('mongoose');
const app = express();
app.use(express.json());
// app.get('/',(req,res)=>{
//   res.send('Smart-Home-API-CKC');
// });

const route =require('./Router');
const { hostname } = require('os');
route(app);
var port =process.env.PORT||5000;
const server =http.createServer(app);
mongoose.connect('mongodb+srv://admin:admin123@smarthome.dahnw7r.mongodb.net/NODE-API?retryWrites=true&w=majority')
.then(()=>{
   console.log('connect to mongodb')
  server.listen(port,() =>
   {console.log(`${port}`)});
 
}).catch((error)=>{
  console.log(error)
})
 