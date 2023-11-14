"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

const _parser = _interopRequireDefault(require('./utility/parser'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function loader(content, map, meta) {
    const callback = this.async();
    content = _parser.default(content);
    callback(null, content);
}

exports.default = loader;
