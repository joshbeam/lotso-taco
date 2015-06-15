var React = require('react');
var TacoStore = require('./stores/tacos.store');
var Slider = require('./components/Slider.react');

React.render(<Slider title="Lotso Taco" tacos={TacoStore.getAll()} />, document.getElementById('slider'));
