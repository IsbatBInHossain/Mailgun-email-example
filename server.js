require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
// allowing all cors
app.use(cors({ origin: '*' }))
const port = process.env.PORT || '3000'

app.get('/api/heartbeat', (req, res) => {
  res.status(200).send({
    status: 'Okay',
    timestamp: new Date(),
  })
})

app.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`)
})
