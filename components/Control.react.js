var React = require('react');
var shortwave = require('../lib/shortwave/shortwave');

var Control = React.createClass({
	changedSlide: function() {
		shortwave.emit('slide.changed', this.props.to);
	},
	render: function() {
		return (
			<button className="control" onClick={this.changedSlide}>{this.props.to === -1 ? 'Previous' : 'Next'}</button>
		);
	}
});

module.exports = Control;