let User = require('./user/index');
let util = require('util');

let pet = new User('Valera');


function run() {
    pet.hello();

    // console.log(module);    
    // console.log(util.inspect(pet.getAllPhrases()));
    console.log(util.format("My %s $d %j", "string", 123, {test: 'obj'}));
};

// If module.parent is equal true - then index.js file is required in other file.
if (module.parent) { 
    exports.run = run; 
} else {
    run();
}
