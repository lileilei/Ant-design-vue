'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _icon = require('../icon/index');

var _icon2 = _interopRequireDefault(_icon);

var _addEventListener = require('rc-util/components/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

var BackTop = (_temp = _class = function (_React$Component) {
  _inherits(BackTop, _React$Component);

  function BackTop(props) {
    _classCallCheck(this, BackTop);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var scrollTop = getScroll(window, true);
    _this.state = {
      visible: scrollTop > _this.props.visibilityHeight
    };
    return _this;
  }

  BackTop.prototype.setScrollTop = function setScrollTop(value) {
    document.body.scrollTop = value;
    document.documentElement.scrollTop = value;
  };

  BackTop.prototype.componentDidMount = function componentDidMount() {
    this.scrollEvent = (0, _addEventListener2["default"])(window, 'scroll', this.handleScroll);
  };

  BackTop.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.scrollEvent) {
      this.scrollEvent.remove();
    }
  };

  BackTop.prototype.render = function render() {
    var _classNames;

    var _props = this.props;
    var prefixCls = _props.prefixCls;
    var className = _props.className;
    var children = _props.children;

    var restProps = _objectWithoutProperties(_props, ['prefixCls', 'className', 'children']);

    var classString = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, className, !!className), _classNames));

    var defaultElement = _react2["default"].createElement(
      'div',
      { className: prefixCls + '-content' },
      _react2["default"].createElement(_icon2["default"], { className: prefixCls + '-icon', type: 'to-top' })
    );

    var style = {
      display: this.state.visible ? 'block' : 'none'
    };

    return _react2["default"].createElement(
      _rcAnimate2["default"],
      {
        showProp: 'data-show',
        transitionName: 'fade',
        onEnd: this.animationEnd,
        transitionAppear: true
      },
      _react2["default"].createElement(
        'div',
        { 'data-show': this.state.visible, style: style },
        _react2["default"].createElement(
          'div',
          _extends({}, restProps, { className: classString, onClick: this.scrollToTop }),
          children || defaultElement
        )
      )
    );
  };

  return BackTop;
}(_react2["default"].Component), _class.propTypes = {
  visibilityHeight: _react2["default"].PropTypes.number
}, _class.defaultProps = {
  onClick: function onClick() {},

  visibilityHeight: 400,
  prefixCls: 'ant-back-top'
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.scrollToTop = function (e) {
    if (e) e.preventDefault();
    _this2.setScrollTop(0);
    _this2.props.onClick(e);
  };

  this.handleScroll = function () {
    var scrollTop = getScroll(window, true);
    _this2.setState({
      visible: scrollTop > _this2.props.visibilityHeight
    });
  };

  this.animationEnd = function () {
    var scrollTop = getScroll(window, true);
    _this2.setState({
      visible: scrollTop > _this2.props.visibilityHeight
    });
  };
}, _temp);
exports["default"] = BackTop;
module.exports = exports['default'];
