const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000
const helmet = require('helmet')
const compression = require('compression')

app.use(helmet())
app.use(compression())
app.use('/', express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})