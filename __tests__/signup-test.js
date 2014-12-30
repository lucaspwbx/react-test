/** @jsx React.DOM */

jest.dontMock('../signup.js');
describe('signup', function() {
  it('tests', function() {
    var React = require('react/addons');
    var Signup = require('../signup.js');
    var TestUtils = React.addons.TestUtils;

    var signup = TestUtils.renderIntoDocument(
      <Signup/>
    );

    var span = TestUtils.findRenderedDOMComponentWithTag(signup, 'span');

    var label = TestUtils.findRenderedDOMComponentWithTag(signup, 'label');
    expect(label.getDOMNode().textContent).toEqual('Nome')

    var input = TestUtils.findRenderedDOMComponentWithTag(signup, 'input');
    expect(input.getDOMNode().textContent).toEqual('');
    TestUtils.Simulate.change(input, {target: {value: 'Hello World'}});
    expect(span.getDOMNode().textContent).toEqual('maior');

    TestUtils.Simulate.change(input, {target: {value: 'hello'}});
    expect(span.getDOMNode().textContent).toEqual('menor');
  });
});
