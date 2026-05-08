const supabase = require('../supabase')

async function criarPedido(req, res){

  try {

    const {
      cliente,
      itens,
      total,
      status
    } = req.body

    const { data, error } = await supabase
      .from('pedidos')
      .insert([
        {
          cliente,
          itens,
          total,
          status
        }
      ])
      .select()

    if(error){

      return res.status(500).json({
        erro: error.message
      })

    }

    res.status(201).json(data)

  } catch(err){

    res.status(500).json({
      erro: err.message
    })

  }

}

async function listarPedidos(req, res){

  try {

    const { data, error } = await supabase
      .from('pedidos')
      .select('*')
      .order('id', {
        ascending: false
      })

    if(error){

      return res.status(500).json({
        erro: error.message
      })

    }

    res.json(data)

  } catch(err){

    res.status(500).json({
      erro: err.message
    })

  }

}

module.exports = {
  criarPedido,
  listarPedidos
}