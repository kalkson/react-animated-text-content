(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?f(exports,require('react'),require('uuid'),require('styled-components')):typeof define==='function'&&define.amd?define(['exports','react','uuid','styled-components'],f):(g=typeof globalThis!=='undefined'?globalThis:g||self,f(g.AnimatedText={},g.React,g.uuid,g.styled));})(this,(function(exports,React,uuid,styled){function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var React__default=/*#__PURE__*/_interopDefaultLegacy(React);var styled__default=/*#__PURE__*/_interopDefaultLegacy(styled);/*! *****************************************************************************
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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}var splitChildrenToFragments = function (children) {
    return children.toString().split(' ');
};
var concatFragments = function (children) {
    var _a;
    var splittedChildren = splitChildrenToFragments(children);
    return (_a = [])
        .concat.apply(_a, splittedChildren.map(function (word, index) {
        return index !== 0 ? [WHITE_SPACE_CODE, word] : [word];
    })).map(function (word) { return (word === ' ' ? WHITE_SPACE_CODE : word); });
};var AnimatedFragment = styled__default["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  visibility: hidden;\n"], ["\n  position: relative;\n  display: inline-block;\n  visibility: hidden;\n"])));
var StyledWrapper = styled__default["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  @keyframes fragmentletter-", " {\n    0% {\n      opacity: 0;\n      visibility: hidden;\n      transform: translateX(", ")\n        translateY(", ")\n        scale(", ");\n    }\n    100% {\n      oapcity: 1;\n      visibility: visible;\n      transform: translateX(0) translateY(0) scale(1);\n    }\n  }\n\n  & > span {\n    display: inline-block;\n  }\n\n  & ", " {\n    text-decoration: inherit;\n    vertical-align: inherit;\n\n    animation: ", ";\n\n    animation-name: ", ";\n  }\n\n  ", "\n"], ["\n  @keyframes fragmentletter-", " {\n    0% {\n      opacity: 0;\n      visibility: hidden;\n      transform: translateX(", ")\n        translateY(", ")\n        scale(", ");\n    }\n    100% {\n      oapcity: 1;\n      visibility: visible;\n      transform: translateX(0) translateY(0) scale(1);\n    }\n  }\n\n  & > span {\n    display: inline-block;\n  }\n\n  & ", " {\n    text-decoration: inherit;\n    vertical-align: inherit;\n\n    animation: ", ";\n\n    animation-name: ", ";\n  }\n\n  ", "\n"])), function (_a) {
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
    var ease = _a.animation.ease, duration = _a.duration;
    return "".concat(duration, "s ").concat(ease !== null && ease !== void 0 ? ease : 'ease-in-out', " forwards;");
}, function (_a) {
    var shouldAnimate = _a.shouldAnimate, uid = _a.uid;
    return shouldAnimate ? "fragmentletter-".concat(uid) : '';
}, function (_a) {
    var _b = _a.count, count = _b === void 0 ? 0 : _b, interval = _a.interval;
    var styles = '';
    for (var i = 0; i < count; i += 1) {
        styles += "".concat(AnimatedFragment, ":nth-of-type(").concat(i + 1, ") {\n            animation-delay: ").concat((interval || 0.04) * i, "s;\n          }");
    }
    return styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", "\n    "], ["\n      ", "\n    "])), styles);
});
var templateObject_1, templateObject_2, templateObject_3;var PREDEFINED_ANIMATIONS = {
    blocks: {
        y: '60px',
        interval: 0.07,
        duration: 0.7
    },
    wave: {
        y: '40px',
        interval: 0.04,
        duration: 0.4,
        ease: 'ease-in-out'
    },
    float: {
        x: '200px',
        ease: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        duration: 1.2,
        interval: 0.1
    },
    bounce: { y: '200px', ease: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' },
    "throw": {
        y: '200px',
        scale: 2,
        interval: 0.07
    },
    diagonal: {
        x: '200px',
        y: '-200px',
        ease: 'cubic-bezier(0.68, -4.55, 0.265, 1.55)'
    },
    rifle: {
        y: '100px',
        x: '-500px',
        ease: 'ease-in',
        duration: 0.3,
        interval: 0.03
    },
    lights: {
        y: '-20px',
        ease: 'ease-out',
        duration: 1,
        interval: 0.4
    }
};
var WHITE_SPACE_CODE = ' ';
var DEFAULT_INTERVAL = 0.04;
var DEFAULT_DURATION = 0.4;
var DEFAULT_TYPE = 'words';
var DEFAULT_ANIMATION = {
    y: '-30px'
};
var DEFAULT_TAG = 'div';
var DEFAULT_INTESECTION_OBSERVER_ROOT_MARGIN = '20%';
var DEFAULT_THRESHOLD = 0;
var renderWords = function (arrayToRender, includeWhiteSpaces) {
    return arrayToRender.map(function (fragment, index) {
        return fragment !== WHITE_SPACE_CODE ? (React__default["default"].createElement(AnimatedFragment, { key: index, dangerouslySetInnerHTML: { __html: fragment } })) : ((includeWhiteSpaces && (React__default["default"].createElement(AnimatedFragment, { key: "".concat(index, "&nbsp;"), dangerouslySetInnerHTML: { __html: '&nbsp;' } }))) ||
            WHITE_SPACE_CODE);
    });
};
var renderChars = function (arrayToRender, interval, includeWhiteSpaces) {
    var fullIndex = -1;
    return arrayToRender.map(function (fragment, index) {
        var chars = fragment !== WHITE_SPACE_CODE ? Array.from(fragment) : [WHITE_SPACE_CODE];
        if (chars[0] !== WHITE_SPACE_CODE)
            return (React__default["default"].createElement("span", { key: index }, chars.map(function (char, charIndex) {
                fullIndex += 1;
                return (React__default["default"].createElement(AnimatedFragment, { key: charIndex, dangerouslySetInnerHTML: { __html: char }, style: { animationDelay: "".concat(interval * fullIndex, "s") } }));
            })));
        return includeWhiteSpaces ? (React__default["default"].createElement(AnimatedFragment, { key: "".concat(index, "&nbsp;"), dangerouslySetInnerHTML: { __html: '&nbsp;' }, style: { animationDelay: "".concat(interval * fullIndex, "s") } })) : (WHITE_SPACE_CODE);
    });
};
var AnimatedText = function (_a) {
    var _b, _c, _d, _e;
    var _f = _a.children, children = _f === void 0 ? '' : _f, _g = _a.type, type = _g === void 0 ? DEFAULT_TYPE : _g, interval = _a.interval, duration = _a.duration, _h = _a.animation, animation = _h === void 0 ? DEFAULT_ANIMATION : _h, _j = _a.animationType, animationType = _j === void 0 ? DEFAULT_TYPE : _j, _k = _a.tag, tag = _k === void 0 ? DEFAULT_TAG : _k, _l = _a.includeWhiteSpaces, includeWhiteSpaces = _l === void 0 ? false : _l, rootMargin = _a.rootMargin, threshold = _a.threshold, props = __rest(_a, ["children", "type", "interval", "duration", "animation", "animationType", "tag", "includeWhiteSpaces", "rootMargin", "threshold"]);
    var _m = React.useState([]), arrayToRender = _m[0], setArrayToRender = _m[1];
    var _o = React.useState(false), shouldAnimate = _o[0], setShouldAnimate = _o[1];
    var wrapperRef = React.useRef(null);
    var animationOptions = (_b = PREDEFINED_ANIMATIONS === null || PREDEFINED_ANIMATIONS === void 0 ? void 0 : PREDEFINED_ANIMATIONS[animationType]) !== null && _b !== void 0 ? _b : animation;
    React.useEffect(function () {
        if (typeof children !== 'string' && typeof children !== 'number') {
            console.error("Only string (ReactText) is currently allowed as react-animated-text-content component's child. Please, change to proper type.");
            return;
        }
        var concatedChildren = concatFragments(children);
        setArrayToRender(concatedChildren);
        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting)
                    return;
                setShouldAnimate(true);
                if (wrapperRef.current)
                    observer.unobserve(wrapperRef.current);
            });
        }, {
            rootMargin: rootMargin || DEFAULT_INTESECTION_OBSERVER_ROOT_MARGIN,
            threshold: threshold || DEFAULT_THRESHOLD
        });
        if (wrapperRef.current) {
            observer.observe(wrapperRef.current);
        }
        return function () {
            setArrayToRender([]);
            setShouldAnimate(false);
        };
    }, [children, type]);
    var uid = uuid.v4();
    return (React__default["default"].createElement(StyledWrapper, __assign({ as: tag, count: type === 'words' ? arrayToRender.length : 0, interval: interval || ((_c = animationOptions === null || animationOptions === void 0 ? void 0 : animationOptions.interval) !== null && _c !== void 0 ? _c : DEFAULT_INTERVAL), duration: duration || ((_d = animationOptions === null || animationOptions === void 0 ? void 0 : animationOptions.duration) !== null && _d !== void 0 ? _d : DEFAULT_DURATION), ref: wrapperRef, shouldAnimate: shouldAnimate, uid: uid, animation: animationOptions, "data-testid": "animated-text" }, props), type === 'words'
        ? renderWords(arrayToRender, includeWhiteSpaces)
        : renderChars(arrayToRender, interval || ((_e = animationOptions === null || animationOptions === void 0 ? void 0 : animationOptions.interval) !== null && _e !== void 0 ? _e : DEFAULT_INTERVAL), includeWhiteSpaces)));
};exports.WHITE_SPACE_CODE=WHITE_SPACE_CODE;exports["default"]=AnimatedText;Object.defineProperty(exports,'__esModule',{value:true});}));//# sourceMappingURL=react-animated-text-content.development.js.map
