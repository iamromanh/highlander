const Bookshelf = require('../config/bookshelf.config');
const Bcrypt = require('bcrypt');
const saltRounds = 10;

require('./Team');
require('./Player');

const Coach = Bookshelf.Model.extend({
  tableName: 'coaches',
  teams: function() {
    return this.belongsToMany('Team', 'coaches_teams');
  }
},
{
  hashPassword: function(password) {
    let hashed = Bcrypt.hash(password, saltRounds)
    return hashed
  },
  validatePassword: function(hashedPassword, plainTextPassword) {
    return Bcrypt.compare(plainTextPassword, hashedPassword)
  }
});


module.exports = Bookshelf.model('Coach', Coach);
