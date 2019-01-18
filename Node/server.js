const express=require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
const port=3000;
app.use(cors());
app.use(bodyparser.json());
const route=require('./routes/api');

app.use('/',route);

app.listen(port,()=>{
  console.log(`listening to port ${port}`);
});