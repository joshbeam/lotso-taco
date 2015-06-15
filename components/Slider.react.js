var React = require('react');
var Pane = require('./Pane.react');
var Controls = require('./Controls.react');
var shortwave = require('../lib/shortwave/shortwave');

var Slider = React.createClass({
	getInitialState: function() {
		return {
			showing: 0
		};
	},
	componentDidMount: function() {
		this.changeListener = shortwave.on('slide.changed', function(e, data) {
			this.changeImage.call(this, data);
		}.bind(this));
	},
	componentWillUnmount: function() {
		shortwave.remove(this.changeListener, function() {
			console.log(true);
		}, function() {
			throw new ReferenceError();
		});
	},
	changeImage: function(to) {
		var limit = this.props.tacos.length - 1;

		if(to === -1) {
			if(this.state.showing === 0) {
				this.setState({showing: limit});
			} else {
				this.setState({showing: this.state.showing - 1});
			}
		} else if(to === 1) {
			if(this.state.showing === limit) {
				this.setState({showing: 0});
			} else {
				this.setState({showing: this.state.showing + 1});
			}
		}
	},
	render: function() {
		return (
			<div className="slider">
				<h1>{this.props.title}</h1>
				<Pane tacos={this.props.tacos} showing={this.state.showing} />
				<Controls />
			</div>
		);
	}
});

module.exports = Slider;