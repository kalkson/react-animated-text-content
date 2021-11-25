

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports,'__esModule',{value:true});var React=require('react'),uuid=require('uuid'),styled=require('styled-components');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var React__default=/*#__PURE__*/_interopDefaultLegacy(React);var styled__default=/*#__PURE__*/_interopDefaultLegacy(styled);var PREDEFINED_ANIMATIONS = {
    blocks: {
        y: '-40px',
    },
    wave: {
        y: '40px',
    },
    float: { x: '200px', y: '0' },
    bounce: { y: '200px', ease: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' },
    throw: {
        y: '200px',
        scale: 4,
    },
    diagonal: {
        x: '200px',
        y: '-200px',
        ease: 'cubic-bezier(0.68, -4.55, 0.265, 1.55)',
        duration: 0.6,
    },
};
var WHITE_SPACE_CODE = '&nbsp;';
var DEFAULT_INTERVAL = 0.04;
var DEFAULT_TYPE = 'words';
var DEFAULT_ANIMATION = {
    y: '-30px',
};
var DEFAULT_TAG = 'div';
var DEFAULT_INTESECTION_OBSERVER_ROOT_MARGIN = '200px';
var DEFAULT_THRESHOLD = 1.0;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}var AnimatedFragment = styled__default["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  visibility: hidden;\n"], ["\n  position: relative;\n  display: inline-block;\n  visibility: hidden;\n"])));
var StyledWrapper = styled__default["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  @keyframes fragmentletter-", " {\n    0% {\n      opacity: 0;\n      visibility: hidden;\n      transform: translateX(", ")\n        translateY(", ")\n        scale(", ");\n    }\n    100% {\n      oapcity: 1;\n      visibility: visible;\n      transform: translateY(0) translateX(0) scale(1);\n    }\n  }\n\n  font-size: 2rem;\n  margin-bottom: 1000px;\n  margin-top: 200px;\n\n  & > span {\n    display: inline-block;\n  }\n\n  & ", " {\n    animation: ", ";\n\n    animation-name: ", ";\n  }\n\n  ", "\n"], ["\n  @keyframes fragmentletter-", " {\n    0% {\n      opacity: 0;\n      visibility: hidden;\n      transform: translateX(", ")\n        translateY(", ")\n        scale(", ");\n    }\n    100% {\n      oapcity: 1;\n      visibility: visible;\n      transform: translateY(0) translateX(0) scale(1);\n    }\n  }\n\n  font-size: 2rem;\n  margin-bottom: 1000px;\n  margin-top: 200px;\n\n  & > span {\n    display: inline-block;\n  }\n\n  & ", " {\n    animation: ", ";\n\n    animation-name: ", ";\n  }\n\n  ", "\n"])), function (_a) {
    var uid = _a.uid;
    return uid;
}, function (_a) {
    var x = _a.animation.x;
    return x !== null && x !== void 0 ? x : 0;
}, function (_a) {
    var y = _a.animation.y;
    return y !== null && y !== void 0 ? y : 0;
}, function (_a) {
    var scale = _a.animation.scale;
    return scale !== null && scale !== void 0 ? scale : 1;
}, AnimatedFragment, function (_a) {
    var _b = _a.animation, duration = _b.duration, ease = _b.ease;
    return "".concat(duration !== null && duration !== void 0 ? duration : 0.4, "s ").concat(ease !== null && ease !== void 0 ? ease : 'ease-in-out', " forwards;");
}, function (_a) {
    var shouldRender = _a.shouldRender, uid = _a.uid;
    return shouldRender && "fragmentletter-".concat(uid);
}, function (_a) {
    var count = _a.count, interval = _a.interval;
    if (!count)
        return;
    var styles = '';
    for (var i = 0; i < count; i += 1) {
        styles += "".concat(AnimatedFragment, ":nth-of-type(").concat(i + 1, ") {\n            animation-delay: ").concat(interval * i, "s;\n          }");
    }
    return styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", "\n    "], ["\n      ", "\n    "])), styles);
});
var templateObject_1, templateObject_2, templateObject_3;var renderWords = function (arrayToRender) {
    return arrayToRender.map(function (fragment, index) { return (React__default["default"].createElement(AnimatedFragment, { key: index, dangerouslySetInnerHTML: { __html: fragment } })); });
};
var renderChars = function (arrayToRender, interval) {
    var fullIndex = -1;
    return arrayToRender.map(function (fragment, index) {
        var chars = fragment !== WHITE_SPACE_CODE ? Array.from(fragment) : [WHITE_SPACE_CODE];
        return (React__default["default"].createElement("span", { key: index }, chars.map(function (char, charIndex) {
            fullIndex += 1;
            return (React__default["default"].createElement(AnimatedFragment, { key: charIndex, dangerouslySetInnerHTML: { __html: char }, style: { animationDelay: "".concat(interval * fullIndex, "s") } }));
        })));
    });
};
var AnimatedText = function (_a) {
    var _b;
    var _c = _a.children, children = _c === void 0 ? '' : _c, _d = _a.interval, interval = _d === void 0 ? DEFAULT_INTERVAL : _d, _e = _a.type, type = _e === void 0 ? DEFAULT_TYPE : _e, _f = _a.animation, animation = _f === void 0 ? DEFAULT_ANIMATION : _f, _g = _a.animationType, animationType = _g === void 0 ? DEFAULT_TYPE : _g, _h = _a.tag, tag = _h === void 0 ? DEFAULT_TAG : _h;
    var _j = React.useState([]), arrayToRender = _j[0], setArrayToRender = _j[1];
    var _k = React.useState(false), shouldRender = _k[0], setShouldRender = _k[1];
    var wrapperRef = React.useRef(null);
    var animationOptions = (_b = PREDEFINED_ANIMATIONS === null || PREDEFINED_ANIMATIONS === void 0 ? void 0 : PREDEFINED_ANIMATIONS[animationType]) !== null && _b !== void 0 ? _b : animation;
    React.useEffect(function () {
        var _a;
        if (typeof children !== 'string' && typeof children !== 'number') {
            console.error("Only string (ReactText) is currently allowed as AnimatedText component's child. Please, change to proper type.");
            return;
        }
        var splittedChildren = children.toString().split(' ');
        var mappedChildren = (_a = [])
            .concat.apply(_a, splittedChildren.map(function (word, index) {
            return index !== splittedChildren.length - 1
                ? [word, WHITE_SPACE_CODE]
                : [word];
        })).map(function (word) { return (word === ' ' ? WHITE_SPACE_CODE : word); });
        setArrayToRender(mappedChildren);
        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting)
                    return;
                setShouldRender(true);
                if (wrapperRef.current)
                    observer.unobserve(wrapperRef.current);
            });
        }, {
            rootMargin: DEFAULT_INTESECTION_OBSERVER_ROOT_MARGIN,
            threshold: DEFAULT_THRESHOLD,
        });
        if (wrapperRef.current)
            observer.observe(wrapperRef.current);
        return function () {
            setArrayToRender([]);
            setShouldRender(false);
        };
    }, [children, type]);
    var uid = uuid.v4();
    return (React__default["default"].createElement(StyledWrapper, { as: tag, count: type === 'words' ? arrayToRender.length : 0, interval: interval, ref: wrapperRef, shouldRender: shouldRender, uid: uid, animation: animationOptions },
        type === 'words' && renderWords(arrayToRender),
        type === 'chars' && renderChars(arrayToRender, interval)));
};exports["default"]=AnimatedText;//# sourceMappingURL=index.js.map
