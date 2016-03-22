var $ = require('jquery');
var React = require('react');

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
        <li key={ customer._id } >
          { customer.name }
        </li>
      );
    });
    return (
      <ul>
        { customerItems }
      </ul>
    );
  }
});

module.exports = CustomerList;
