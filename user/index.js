let log = require('../logger')(module);
let db = require('db');
db.connect();
 
function User(name) {
  this.name = name;  
};

User.prototype.hello = function(){
	log(db.getPhrase('run_success'));

    console.log(`${db.getPhrase('Hello')} ${this.name}`);
};


/**
* Returns all phrases in db
*/
User.prototype.getAllPhrases = () => {
	return db.getAllPhrases();
}

// Global definition
//global.User = User;

// Export by default. Export exact function, not function in object: let user = require('./User'); user(); Not user.User();
 module.exports = User;

// Local definition
// exports is propertty of 'module' object which present in each module(file): module.exports
//exports.User = User;