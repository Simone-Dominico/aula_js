module.exports = app => {
  const controller = require('../controllers/customerStudents')();

  app.route('/api/v1/customer-students')
    .get(controller.listCustomerStudents);
}
