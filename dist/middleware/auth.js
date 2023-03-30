"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_status_1 = __importDefault(require("http-status"));
const helperMethods_1 = require("../utils/helperMethods");
const secret = process.env.JWT_SECRET || 'example';
async function auth(req, res, next) {
    try {
        const token = req.headers.token || req.cookies.token;
        if (!token) {
            return (0, helperMethods_1.errorResponse)(res, 'No token. Kindly sign in as a User', http_status_1.default.UNAUTHORIZED);
        }
        let verified = jsonwebtoken_1.default.verify(token, secret);
        if (!verified) {
            return (0, helperMethods_1.errorResponse)(res, 'Invalid Token. Kindly sign in as a User', http_status_1.default.UNAUTHORIZED);
        }
        next();
    }
    catch (error) {
        console.log(error);
        return (0, helperMethods_1.errorResponse)(res, 'User could not be authenticated', http_status_1.default.FORBIDDEN);
    }
}
exports.auth = auth;
//# sourceMappingURL=auth.js.map