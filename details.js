/** @jsx React.DOM */

var React = require('react/addons');

var Details = React.createClass({
  render: function() {
    return (
    <div>
      <p className='title'>{this.props.title}</p>
    </div>
    );
  }
});

module.exports = Details;
