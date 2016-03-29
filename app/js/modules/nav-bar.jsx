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
        <li className="nav-bar-item">Asdf</li>
        <li className="nav-bar-item">Ghjk</li>
        <li className="nav-bar-item">Fghj</li>
        <li className="nav-bar-item">Erty</li>
        <li className="nav-bar-item">Qwerty</li>
      </ul>
    );
  }
});

module.exports = NavBar;
