const store = require('../../../store/remote-mysql');
// const store = require('../../../store/mysql');
const controller = require('./controller');

module.exports = controller(store);