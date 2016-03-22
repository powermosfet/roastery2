var React = require('react');
var CustomerList = require('./customer-list');


module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <CustomerList url="/api/customers" />
      </div>
    );
  },
});
