const md5 = require('md5');
const Customer = require("../../models/customer.model");

const login = (req, res) => {
  res.render('client/pages/auth/login.pug');
};

const loginValidation = async (req, res) => {
  const phone = req.body.phone;
  const password = md5(req.body.password);
  console.log(phone, password);

  try {
    const customer = await Customer.findOne({
      deleted: false,
      phone: phone
    });

    if (!customer) {
      req.flash('delete', 'Tài khoản không tồn tại!');
      return res.redirect('back');
    }

    if (customer.status === 'inactive') {
      req.flash('delete', 'Tài khoản chưa được kích hoạt!');
      return res.redirect('back');
    }

    if (password !== customer.password) {
      req.flash('delete', 'Mật khẩu không đúng');
      return res.redirect('back');
    }

    req.flash('update', 'Đăng nhập thành công!');
    res.cookie('token', customer.token);
    res.locals.token = customer.token; // Set token in res.locals for the current request
    res.redirect('/');
  } catch (error) {
    console.error("Error during login validation:", error);
    req.flash('delete', 'Có lỗi xảy ra trong quá trình đăng nhập.');
    res.redirect('back');
  }
};

const logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
};
const signUp = (req, res)=>{
  res.render('client/pages/auth/signUp.pug');
}
const register =async (req, res)=>{
  req.body.password = md5(req.body.password)
  console.log(req.body)
  const record = new Customer(req.body)
  await record.save()
  res.redirect('/auth/login')
}
module.exports = {
  login,
  loginValidation,
  logout,
  signUp,
  register
};
