var React = require('react');

var Pane = React.createClass({
	render: function() {
		return (
			<div className="pane">
				{this.props.tacos.map(function(url, i) {
					return <img src={url} key={i} className={ this.props.showing === i ? '' : 'hidden' } />;
				}.bind(this))}
			</div>
		);
	}
});

module.exports = Pane;