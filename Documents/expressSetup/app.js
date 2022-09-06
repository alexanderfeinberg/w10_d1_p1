const express = require('express')
const app = express()
const port = 5001

app.get('/status', (req, res)=>{
    res.send("The server is alive!")
})


app.listen(port, ()=> console.log(`Server has started on port ${port}.`))
