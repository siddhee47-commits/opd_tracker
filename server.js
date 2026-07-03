const express = require('express')
const app = express()
app.get('/',(req,res)=>{
res.json({message:'OPD Queue Server Running!'})
})
app.listen(5000,()=>
console.log('Server on port 5000'))

