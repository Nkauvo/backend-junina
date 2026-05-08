const express = require('express')

const cors = require('cors')

require('dotenv').config()

const pedidosRoutes = require('../routes/pedidos')

const app = express()

const produtosRoutes =
require('../routes/produtos')

app.use('/produtos', produtosRoutes)

app.use(cors())

app.use(express.json())

app.use('/pedidos', pedidosRoutes)

app.get('/', (req, res) => {

  res.json({
    mensagem: 'API Barraca do Mimi 🔥'
  })

})

module.exports = app