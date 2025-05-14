const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req,res)=>{
    res.json({
        'message': 'Hello World Child Beeshal!'
    })
})


app.listen(3030, ()=>console.log("Server listening on http://localhost:3030"))