const express = require('express')
const morgan = require('morgan')
const path = require('path')

const port = process.env.PORT || 4000

const app = express()

app.use(morgan('tiny'))

app.use(express.static(path.join(__dirname, 'dist')))

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})