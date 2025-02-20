if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()  
}
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
 
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.get('/', (req, res) => {
//   res.send('Whee!')
// })

app.use('/', require('./routes'));

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

if(process.env.NODE_ENV !== "development") {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}