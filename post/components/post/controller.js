const TABLE = 'post';

module.exports = (injectedstore) => { 
  if(!injectedstore){
    injectedstore = require('../../../store/dummy');
  }
  return {
    list: () =>
      injectedstore.list(TABLE),
  }
}