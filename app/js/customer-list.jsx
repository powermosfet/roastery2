var React = require('react');
var List = require('material-ui/lib/lists/list');
var ListItem = require('material-ui/lib/lists/list-item');
var ActionInfo = require('material-ui/lib/svg-icons/action/info');

var CustomerList = React.createClass({
  render: function() {
    return (
      <List>
        <ListItem primaryText="Silje Sandanger" />
        <ListItem primaryText="Rebecca Berge" />
        <ListItem primaryText="Anette Berge" />
        <ListItem primaryText="Henry Ertresvaag" />
      </List>
    );
  }
});

module.exports = CustomerList;
