const express = require('express')

const router = express.Router()

const {
  criarPedido,
  listarPedidos
} = require('../controllers/pedidosController')

router.post('/', criarPedido)

router.get('/', listarPedidos)

module.exports = router