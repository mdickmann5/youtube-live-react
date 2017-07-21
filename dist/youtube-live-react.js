(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.YoutubeLive = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/* global gapi */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var DEFAULT_IFRAME_WIDTH = '560';
var DEFAULT_IFRAME_HEIGHT = '315';

var YoutubeLive = (function (_Component) {
  _inherits(YoutubeLive, _Component);

  function YoutubeLive(props) {
    _classCallCheck(this, YoutubeLive);

    _get(Object.getPrototypeOf(YoutubeLive.prototype), 'constructor', this).call(this, props);
    this.state = {
      videoIdList: []
    };
  }

  _createClass(YoutubeLive, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var maxResults = _props.maxResults;
      var googleApiKey = _props.googleApiKey;
      var youtubeChannelId = _props.youtubeChannelId;

      if (!googleApiKey) {
        console.error('You must provide a googleApiKey prop');
        return;
      }

      if (!youtubeChannelId) {
        console.error('You must provide a youtubeChannelId prop');
        return;
      }

      this.performAPIQuery(maxResults, googleApiKey, youtubeChannelId);
    }
  }, {
    key: 'performAPIQuery',
    value: function performAPIQuery(maxResults, googleApiKey, youtubeChannelId) {
      if (maxResults === undefined) maxResults = 10;

      var _this = this;

      var script = document.createElement("script");
      script.src = "https://apis.google.com/js/client.js";

      script.onload = function () {
        gapi.load('client', function () {
          gapi.client.setApiKey(googleApiKey);
          gapi.client.load('youtube', 'v3', function () {
            gapi.client.youtube.search.list({
              part: 'snippet',
              channelId: youtubeChannelId,
              maxResults: maxResults,
              type: 'video',
              eventType: 'live'
            }).then(function (response) {
              var json = JSON.parse(response.body);

              if (json.pageInfo.totalResults === 0) {
                _this.setState({
                  videoIdList: []
                });
              } else {

                var videoIdList = [];

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  for (var _iterator = json.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    videoIdList.push(item.id.videoId);
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                      _iterator['return']();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }

                _this.setState({
                  videoIdList: videoIdList
                });
              }
            }, function (reason) {
              console.log('Error: ' + reason.result.error.message);
            });
          });
        });
      };

      document.body.appendChild(script);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var iframeWidth = _props2.iframeWidth;
      var iframeHeight = _props2.iframeHeight;
      var containerStyle = _props2.containerStyle;
      var itemContainerStyle = _props2.itemContainerStyle;

      console.log(this.props);

      return _react2['default'].createElement(
        'div',
        { style: containerStyle },
        this.state.videoIdList.map(function (videoId) {
          return _react2['default'].createElement(
            'div',
            { style: itemContainerStyle },
            _react2['default'].createElement('iframe', { width: iframeWidth ? iframeWidth : DEFAULT_IFRAME_WIDTH,
              height: iframeHeight ? iframeHeight : DEFAULT_IFRAME_HEIGHT,
              src: "https://www.youtube.com/embed/" + videoId,
              frameBorder: '0',
              allowFullScreen: true })
          );
        })
      );
    }
  }]);

  return YoutubeLive;
})(_react.Component);

exports['default'] = YoutubeLive;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});