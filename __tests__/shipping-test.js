/** @jsx React.DOM */

jest.dontMock('../shipping.js');
describe('shipping', function() {
  var React = require('react/addons');
  var Shipping = require('../shipping.js');
  var TestUtils = React.addons.TestUtils;

  var shippingPrice = TestUtils.renderIntoDocument(<Shipping/>);

  it('has a state of 0', function() {
    expect(shippingPrice.state.shipping).toEqual(0);
  });

  describe('when i click on calculate', function() {
    var button;

    beforeEach(function() {
      button = TestUtils.findRenderedDOMComponentWithTag(shippingPrice, 'button');
    });

    it('sets a new shipping state', function() {
      var cep = shippingPrice.refs.cep.getDOMNode();
      TestUtils.Simulate.change(cep, {target: {value: 10}});
      TestUtils.Simulate.click(button);
      expect(shippingPrice.state.shipping).toEqual(10);
    });
  });
});
