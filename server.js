const express = require('express')
const bodyParser = require('body-parser')
const renderFile = require('ejs').renderFile
const app = express()

const PORT = process.env.PORT || 8080

app.set('port', PORT)
app.engine('html', renderFile)
app.set('view engine', 'html')

app.use(express.static(__dirname + '/dist'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(PORT, function() {
  console.log('\n=== Listening on port ' + PORT + ' ===\n')
})
