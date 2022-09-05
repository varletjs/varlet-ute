"use strict";
exports.__esModule = true;
exports.use = exports.merge = exports.packs = exports.pack = exports.add = void 0;
// lib
var zh_CN_1 = require("../../../locale/zh-CN");
var en_US_1 = require("../../../locale/en-US");
// mobile example doc
var zh_CN_2 = require("./zh-CN");
var en_US_2 = require("./en-US");
var locale_1 = require("../../../locale");
var _a = locale_1.useLocale(), add = _a.add, exampleUse = _a.use, pack = _a.pack, packs = _a.packs, merge = _a.merge;
exports.add = add;
exports.pack = pack;
exports.packs = packs;
exports.merge = merge;
var use = function (lang) {
    locale_1.use(lang);
    exampleUse(lang);
};
exports.use = use;
// lib
locale_1.add('zh-CN', zh_CN_1["default"]);
locale_1.add('en-US', en_US_1["default"]);
// mobile example doc
add('zh-CN', zh_CN_2["default"]);
add('en-US', en_US_2["default"]);
