var React = require('react');
var AppBar = require('material-ui/lib/app-bar');

module.exports = React.createClass({
  render: function() {
    return (
  <div>
    <AppBar
      title="Customers"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </div>
    );
  },
});
