const express=require('express')
const bodyparser=require('body-parser')
const path=require('path')
const app=express()

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))


//router
app.use('/admin',require('./Routes/admin'))
app.use('/',require('./Routes/shop'))


//page not found middleware

app.use((req,res,next)=>{
    res.status(400).sendfile(path.join(__dirname,'views','404.html'))
})

app.listen(3000,()=>{
    console.log('app is running on port 3000');
})