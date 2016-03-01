var React = require('react');
var AppBar = require('material-ui/lib/app-bar');
var CustomerList = require('./customer-list');
var ContentAdd = require('material-ui/lib/svg-icons/content/add');
var IconButton = require('material-ui/lib/icon-button');

module.exports = React.createClass({
  render: function() {
    return (
  <div>
    <AppBar
      title="Customers"
      iconElementRight={
        <IconButton>
          <ContentAdd />
        </IconButton>
      }
    />
    <CustomerList url="/api/customers" />
  </div>
    );
  },
});
