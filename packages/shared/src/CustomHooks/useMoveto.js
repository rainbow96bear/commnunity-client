"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var useMoveto = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var moveto = function (path) {
        navigate(path);
    };
    return moveto;
};
exports.default = useMoveto;
