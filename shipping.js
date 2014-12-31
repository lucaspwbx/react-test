/** @jsx React.DOM */

var React = require('react/addons');

var Shipping = React.createClass({
  getInitialState: function() {
    return {
      shipping: 0
    };
  },
  handleClick: function(e) {
    this.setState({
      shipping: 10
    });
  },
  render: function() {
    return (
      <div>
        <input ref="cep" type="text"/>
        <button onClick={this.handleClick}>Calculate</button>
      </div>
    );
  }
});

module.exports = Shipping;
