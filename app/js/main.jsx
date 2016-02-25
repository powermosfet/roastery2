var React = require('react');
var AppBar = require('material-ui/lib/app-bar');
var CustomerList = require('./customer-list');
var FloatingActionButton = require('material-ui/lib/floating-action-button');
var ContentAdd = require('material-ui/lib/svg-icons/content/add');

module.exports = React.createClass({
  render: function() {
    return (
  <div>
    <AppBar
      title="Customers"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <CustomerList url="/api/customers" />
    <FloatingActionButton>
      <ContentAdd />
    </FloatingActionButton>
  </div>
    );
  },
});
