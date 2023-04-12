module.exports = () => {
  const customerStudentsDB = require('../data/customerStudents.json');
  const controller = {};

  controller.listCustomerStudents = (req, res) => res.status(200).json(customerStudentsDB);

  return controller;
}
