"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moveto = void 0;
var react_router_dom_1 = require("react-router-dom");
var Moveto = function (router) {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var moveToRouter = function () {
        navigate(router);
    };
    return moveToRouter;
};
exports.Moveto = Moveto;
