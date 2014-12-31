/** @jsx React.DOM */

jest.dontMock('../price.js');
describe('price', function() {
  var React = require('react/addons');
  var Price = require('../price.js');
  var TestUtils = React.addons.TestUtils;

  var price = TestUtils.renderIntoDocument(<Price normalPrice='90' discount='30'/>);

  it('has a normal Price', function() {
    var normalPrice = TestUtils.findRenderedDOMComponentWithClass(price, 'normalPrice');
    expect(normalPrice.getDOMNode().textContent).toEqual('90');
  });

  it('has a price with discount', function() {
    var priceWithDiscount = TestUtils.findRenderedDOMComponentWithClass(price, 'priceWithDiscount');
    expect(priceWithDiscount.getDOMNode().textContent).toEqual('60');
  });

  it('has a buy product button', function() {
    var button = TestUtils.findRenderedDOMComponentWithTag(price, 'button');
    expect(button.getDOMNode().textContent).toEqual('Buy product');

    TestUtils.Simulate.click(button);
    var amount = TestUtils.findRenderedDOMComponentWithClass(price, 'amount');
    expect(amount.getDOMNode().textContent).toEqual('1');
  });
});
