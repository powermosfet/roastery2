var React = require('react');
var AppBar = require('material-ui/lib/app-bar');
var LeftNav = require('material-ui/lib/left-nav');
var CustomerList = require('./customer-list');
var ContentAdd = require('material-ui/lib/svg-icons/content/add');
var IconButton = require('material-ui/lib/icon-button');

module.exports = React.createClass({
  getInitialState: function() {
    return { leftNavOpen: false };
  },
  handleMenuClick: function() {
    this.state.leftNavOpen = !this.state.leftNavOpen;
  },
  handleAdd: function() {
    console.log("Clicked add button");
  },
  render: function() {
    return (
  <div>
    <AppBar
      title="Customers"
      onTitleTouchTap={this.handleMenuClick}
      onRightIconButtonTouchTap={this.handleAdd}
      iconElementRight={
        <IconButton>
          <ContentAdd />
        </IconButton>
      }
    />
    <LeftNav open={this.state.leftNavOpen} />
    <CustomerList url="/api/customers" />
  </div>
    );
  },
});
