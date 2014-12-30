/** @jsx React.DOM */

var React = require('react/addons');

var Signup = React.createClass({
  getInitialState: function() {
    return {
      msg: 'not'
    }
  },
  onChange: function(e) {
    this.setState({
      msg: e.target.value
    });
  },
  render: function() {
    return (
      <div id="signup">
        <label htmlFor="name">Nome</label>
        <input onChange={this.onChange} type="text" placeholder="Name" name="name"/>
        <span>{this.state.msg.length > 5 ? "maior" : "menor"}</span>
      </div>
    );
  }
});

module.exports = Signup;
