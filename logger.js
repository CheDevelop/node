module.exports = function(mod){
	return function(/*...*/) {
		let args = [mod.filename].concat([].slice.call(arguments));

		console.log(args.join());
	}
}