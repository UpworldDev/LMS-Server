const Attendance = require('../models').Attendance;
const { parse } = require('../functions/parser');

module.exports = {
  create(req, res) {
    return Attendance
      .bulkCreate(req.body)
      .then(attendance => res.status(201).send(attendance))
      .catch(error => res.status(400).send(error));
  }
};
