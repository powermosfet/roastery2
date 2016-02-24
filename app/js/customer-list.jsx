var React = require('react');
var List = require('material-ui/lib/lists/list');
var ListItem = require('material-ui/lib/lists/list-item');
var Avatar = require('material-ui/lib/svg-icons/action/info');

var CustomerList = React.createClass({
  render: function() {
    var customerItems = this.props.data.map(function(customer) {
      var firstLetter = customer.name[0] || 'X';
      return (
        <ListItem
          leftAvatar={<Avatar>{ firstLetter }</Avatar>}
          >
          { customer.name }
        </ListItem>
      );
    });
    return (
      <List>
        { customerItems }
      </List>
    );
  }
});

module.exports = CustomerList;
