"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

const _colorParse = _interopRequireDefault(require("parse-css-color"));
const _color = _interopRequireDefault(require("./color"));
const _solver = _interopRequireDefault(require("./solver"));

const colorFilterRegExp = /__color-filter-to\(([^;}]*)\)/g;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const replaceColor = function(match, color) {
    console.log(match, color);
    if(match && color) {
        const parsedColor = _colorParse.default(color.trim());
        const filter = convertColor(parsedColor.values);
        return filter;
    }
    return '';
}

const parser = function(content) {
    console.log(content);

    return content.replace(colorFilterRegExp, replaceColor);
}

const convertColor = function (values) {
    if(values) {
        const color = new _color.default(values[0], values[1], values[2]);
        const solver = new _solver.default(color);

        const maxIterations = 100;
        const threshold = 0.05;
        let i = 0;
        let result = solver.solve();
        let tmpResult;
        let iterations = 0;

        for(let i = 0; i < maxIterations; i++) {
            tmpResult = solver.solve();

            if(tmpResult.loss < result.loss) {
                result = tmpResult;
            }

            if(result.loss < threshold) {
                break;
            }

            iterations++;
        }

        console.log('Color filter iterations: ' + iterations);

        return result.filter.replace('filter:', 'filter: brightness(0) saturate(100%)');
    }
}

exports.default = parser;
