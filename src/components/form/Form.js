'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Form = (_temp = _class = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Form.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
  };

  Form.prototype.getChildContext = function getChildContext() {
    return {
      form: this.props.form
    };
  };

  Form.prototype.render = function render() {
    var _classNames;

    var _props = this.props;
    var prefixCls = _props.prefixCls;
    var className = _props.className;
    var style = _props.style;

    var formClassName = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-horizontal', this.props.horizontal), _defineProperty(_classNames, prefixCls + '-inline', this.props.inline), _defineProperty(_classNames, className, !!className), _classNames));

    return _react2["default"].createElement(
      'form',
      _extends({}, this.props, { className: formClassName, style: style }),
      this.props.children
    );
  };

  return Form;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-form',
  onSubmit: function onSubmit(e) {
    e.preventDefault();
  }
}, _class.propTypes = {
  prefixCls: _react2["default"].PropTypes.string,
  horizontal: _react2["default"].PropTypes.bool,
  inline: _react2["default"].PropTypes.bool,
  form: _react2["default"].PropTypes.object,
  children: _react2["default"].PropTypes.any,
  onSubmit: _react2["default"].PropTypes.func
}, _class.childContextTypes = {
  form: _react2["default"].PropTypes.object
}, _temp);
exports["default"] = Form;
module.exports = exports['default'];