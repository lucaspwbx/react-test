/** @jsx React.DOM */

jest.dontMock('../details.js');
describe('details', function() {
  var React = require('react/addons');
  var Details = require('../details.js');
  var TestUtils = React.addons.TestUtils;

  var details = TestUtils.renderIntoDocument(<Details title='TV 39'/>);

  it('has a title', function() {
    var title = TestUtils.findRenderedDOMComponentWithClass(details, 'title');
    expect(title.getDOMNode().textContent).toEqual('TV 39');
  });
});
