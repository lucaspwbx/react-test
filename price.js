/** @jsx React.DOM */

var React = require('react/addons');

var Price = React.createClass({
  getInitialState: function() {
    return {
      amount: 0
    };
  },
  handleClick: function(e) {
    this.setState({
      amount: this.state.amount + 1
    });
  },
  render: function() {
    return (
      <div>
        <span className='normalPrice'>{this.props.normalPrice}</span>
        <span className='priceWithDiscount'>{this.props.normalPrice - this.props.discount}</span>
        <button onClick={this.handleClick}>Buy product</button>
        <span className='amount'>{this.state.amount}</span>
      </div>
    );
  }
});

module.exports = Price;
