var React = require('react');
var CustomerList = require('./customer-list');


module.exports = React.createClass({
  getInitialState: function() {
    return { leftNavOpen: false };
  },
  render: function() {
    return (
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    );
  },
});
