"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var fa_1 = require("react-icons/fa");
var styled_components_1 = __importDefault(require("styled-components"));
var ScrollUpButton = function (_a) {
    var width = _a.width, height = _a.height, fontSize = _a.fontSize, color = _a.color;
    var scrollToTop = function () {
        console.log("Scroll to top triggered");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    var StyledButton = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: ", "px;\n    height: ", "px;\n    background-color: white;\n    color: ", ";\n    font-size: ", "px;\n    border-radius: 50%;\n    cursor: pointer;\n  "], ["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: ", "px;\n    height: ", "px;\n    background-color: white;\n    color: ", ";\n    font-size: ", "px;\n    border-radius: 50%;\n    cursor: pointer;\n  "])), width, height, color, fontSize);
    return (react_1.default.createElement(StyledButton, { onClick: scrollToTop },
        react_1.default.createElement(fa_1.FaArrowCircleUp, null)));
};
exports.default = ScrollUpButton;
var templateObject_1;
