require("./hello.js");

console.log('main.js');
var React = require('react');
var ReactDOM = require('react-dom');
var App = require("./components/App.js");
require('./style/main.scss');
require('./style/common.scss');
ReactDOM.render(<App />, document.getElementById('app'));
// var App = require("./components/App.js");
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// require('./styles/main.scss');
//
//
// ReactDOM.render(<App />, document.getElementById('app'));
