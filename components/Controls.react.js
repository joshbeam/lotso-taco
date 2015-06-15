var React = require('react');
var Control = require('./Control.react');

var Controls = React.createClass({
	render: function() {
		return (
			<div className="controls">
				<Control to={-1} />
				<Control to={1} />
			</div>
		);
	}
});

module.exports = Controls;