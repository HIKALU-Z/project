var React = require('react');
var ReactDOM = require('react-dom');
var Action = require("./Test.js");

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Test />
      </div>
    );
  }
});

module.exports = App;
