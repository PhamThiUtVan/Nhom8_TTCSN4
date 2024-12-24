const Cart = require('../../models/cart.model')
const cart = async (req, res) => {
    const cart = await Cart.find({
        status: "shipping"
      })
      console.log(cart)
      res.render('admin/pages/cart/index.pug', { titlePage: 'Carts page', cart: cart});
}
  
module.exports = {cart}
  
  