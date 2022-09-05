"use strict";

var _enUS = _interopRequireDefault(require("../en-US"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function mockConsole(method) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var originMethod = console[method];
  console[method] = fn;
  return {
    mockRestore: function mockRestore() {
      console[method] = originMethod;
    }
  };
}

test('test add lang', function () {
  var _useLocale = (0, _index.useLocale)(),
      add = _useLocale.add,
      use = _useLocale.use,
      pack = _useLocale.pack,
      packs = _useLocale.packs;

  var LANG = 'custom';
  var PACK = {
    button: 'Custom Text'
  };
  add(LANG, PACK);
  use(LANG);
  expect(pack.value.lang).toBe(LANG);
  expect(packs[LANG]).toBe(PACK);
});
test('test merge lang', function () {
  var fn = jest.fn();

  var _mockConsole = mockConsole('warn', fn),
      mockRestore = _mockConsole.mockRestore;

  var _useLocale2 = (0, _index.useLocale)(),
      add = _useLocale2.add,
      use = _useLocale2.use,
      merge = _useLocale2.merge,
      pack = _useLocale2.pack;

  var LANG = 'en-US';
  var PACK = {
    button: 'Custom Text'
  };
  add(LANG, _enUS["default"]);
  use('zh_HK');
  use(LANG);
  merge('zh_HK', PACK);
  merge(LANG, PACK);
  expect(pack.value.button).toBe('Custom Text');
  expect(fn).toHaveBeenCalledTimes(2);
  mockRestore();
});