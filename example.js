require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var YoutubeLive = require('youtube-live-react');

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h2',
				null,
				'Example using the Nasa\'s Youtube Channel'
			),
			React.createElement(YoutubeLive, {
				iframeWidth: 400,
				iframeHeight: 300,
				maxResults: 50,
				youtubeChannelId: 'UCLA_DiR1FfKNvjuUpBHmylQ',
				googleApiKey: 'AIzaSyCW48jzlVJbT4UEmt70Eyix9njr8Ni1rh0' })
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"youtube-live-react":undefined}]},{},[1]);
