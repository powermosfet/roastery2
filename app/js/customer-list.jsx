var $ = require('jquery');
var React = require('react');
var List = require('material-ui/lib/lists/list');
var ListItem = require('material-ui/lib/lists/list-item');
var Avatar = require('material-ui/lib/avatar');

var CustomerList = React.createClass({
  loadCustomers: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCustomers();
    // setInterval(this.loadCustomers, this.props.pollInterval);
  },
  render: function() {
    var customerItems = this.state.data.map(function(customer) {
      var firstLetter = customer.name[0] || 'X';
      return (
        <ListItem
          key={ customer._id }
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
