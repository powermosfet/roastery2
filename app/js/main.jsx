var React = require('react');
var CustomerList = require('./customer-list');


module.exports = React.createClass({
  getInitialState: function() {
    return { leftNavOpen: false };
  },
  render: function() {
    return (
      <div>
        <CustomerList url="/api/customers" />
      </div>
    );
  },
});
