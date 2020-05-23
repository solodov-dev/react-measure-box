Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Measure = _interopDefault(require('react-measure'));

function MeasureBox(props) {
    var _a = React.useState(), dimentions = _a[0], setDimentions = _a[1];
    return (React__default.createElement("div", { className: props.className },
        React__default.createElement(Measure, { bounds: true, onResize: function (contentRect) { return setDimentions(contentRect.bounds); } }, function (_a) {
            var measureRef = _a.measureRef;
            return (React__default.createElement("div", { ref: measureRef, style: {
                    resize: props.resizable,
                    overflow: 'auto',
                    border: '2px solid',
                    borderColor: props.color || 'darkorange',
                    width: props.width || '200px',
                    height: props.height || '150px',
                    position: 'relative',
                    zIndex: 1000,
                } }, props.children));
        }),
        React__default.createElement("span", { style: {
                textTransform: 'lowercase',
                display: 'inline-block',
                backgroundColor: props.color || 'darkorange',
                color: 'white',
                padding: '5px',
            } },
            "Width: ", dimentions === null || dimentions === void 0 ? void 0 :
            dimentions.width,
            " Height: ", dimentions === null || dimentions === void 0 ? void 0 :
            dimentions.height)));
}

exports.default = MeasureBox;
//# sourceMappingURL=index.js.map
