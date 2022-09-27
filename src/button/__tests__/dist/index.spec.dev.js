'use strict'

var _index = _interopRequireDefault(require('../index'))

var _vue = require('vue')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

test('test button use', function () {
  var app = (0, _vue.createApp)({}).use(_index['default'])
  expect(app.component(_index['default'].name)).toBeTruthy()
})
