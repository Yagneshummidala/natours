const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.checkID = (req, res, next, val) => {
  next();
};

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    data: {
      users
    }
  });
});
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'erorr',
    message: 'This Route is not defined'
  });
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'erorr',
    message: 'This Route is not defined'
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'erorr',
    message: 'This Route is not defined'
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'erorr',
    message: 'This Route is not defined'
  });
};
