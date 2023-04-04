console.log("HELLO WORLD JS")

import  express  from "express"
import path from 'path'

const app = express()
const port = 2000; 
const __dirname = path.resolve()

app.get('/asd',(req,res)=>{
    res.send("helloworld " + new Date().toString())
    console.log(req.ip)
})

app.use('/', express.static(path.join(__dirname, './my-app/build')))


app.listen(port, ()=>{
    console.log(`we are listening on ${port}`)
})
