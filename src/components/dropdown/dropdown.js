'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcDropdown = require('rc-dropdown');

var _rcDropdown2 = _interopRequireDefault(_rcDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Dropdown = (_temp = _class = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Dropdown.prototype.render = function render() {
    var _props = this.props;
    var overlay = _props.overlay;

    var otherProps = _objectWithoutProperties(_props, ['overlay']);

    var menu = _react2["default"].cloneElement(overlay, {
      openTransitionName: 'zoom-big'
    });
    return _react2["default"].createElement(_rcDropdown2["default"], _extends({}, otherProps, { overlay: menu }));
  };

  return Dropdown;
}(_react2["default"].Component), _class.defaultProps = {
  transitionName: 'slide-up',
  prefixCls: 'ant-dropdown',
  mouseEnterDelay: 0.15,
  mouseLeaveDelay: 0.1
}, _temp);
exports["default"] = Dropdown;
module.exports = exports['default'];