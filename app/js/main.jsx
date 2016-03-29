var React = require('react');
var CustomerList = require('./modules/customer-list');
var NavBar = require('./modules/nav-bar');

require('../css/main.scss');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="page">
        <NavBar />
        <CustomerList url="/api/customers" />
      </div>
    );
  },
});
