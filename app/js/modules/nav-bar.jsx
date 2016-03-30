var $ = require('jquery');
var React = require('react');

require('../../css/modules/nav-bar.scss');

var NavBar = React.createClass({
  getInitialState: function() {
    return null;
  },
  render: function() {
    return (
      <ul className="nav-bar-list" >
        <li className="nav-bar-item"><a href="#">Asdf</a></li>
        <li className="nav-bar-item"><a href="#">Ghjk</a></li>
        <li className="nav-bar-item"><a href="#">Fghj</a></li>
        <li className="nav-bar-item"><a href="#">Erty</a></li>
        <li className="nav-bar-item"><a href="#">Qwer</a></li>
      </ul>
    );
  }
});

module.exports = NavBar;
