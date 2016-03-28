var React = require('react');
var CustomerList = require('./modules/customer-list');

require('../css/main.scss');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="page">
        <CustomerList url="/api/customers" />
      </div>
    );
  },
});
