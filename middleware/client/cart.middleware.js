const Cart = require('../../models/cart.model')
const cartID =async (req, res, next)=>{
    res.locals.token = req.cookies.token || ""; // Assign token from cookie or empty string if not set
    console.log(req.cookies.cartID)
    if(!req.cookies.cartID){
        const cart = new Cart();
        await cart.save()
        const expiresTime = 1000 * 60 * 60 * 24 *365 // 1 year
        res.cookie("cartID", cart.id, {
            expires: new Date(Date.now() + expiresTime)
        })
    }
    next()


}
module.exports = {
    cartID
  }   