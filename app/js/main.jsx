var React = require('react');
var AppBar = require('material-ui/lib/app-bar');
var CustomerList = require('./customer-list');
var ContentAdd = require('material-ui/lib/svg-icons/content/add');
var FlatButton = require('material-ui/lib/flat-button');

module.exports = React.createClass({
  render: function() {
    return (
  <div>
    <AppBar
      title="Customers"
      iconElementRight={
        <FlatButton>
          <ContentAdd />
        </FlatButton>
      }
    />
    <CustomerList url="/api/customers" />
  </div>
    );
  },
});
