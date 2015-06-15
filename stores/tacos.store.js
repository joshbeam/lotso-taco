var _tacos = [
	'images/happy-taco.gif',
	'images/lots-of-tacos.png',
	'images/soft-taco.png',
	'images/taco.jpg',
	'images/two-tacos.jpg'
];

var TacoStore = {
	getAll: function() {
		return _tacos;
	}
};

module.exports = TacoStore;