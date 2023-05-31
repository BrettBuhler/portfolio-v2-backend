const express = require('express')
require('dotenv').config()
const app = express()

const port = process.env.PORT || 5000

app.use(express.static('public'))

app.get('/', (req, res) =>{
    console.log('New')
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, ()=>{
    console.log('listening on', port)
})

