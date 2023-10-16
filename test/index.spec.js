"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_check_1 = __importDefault(require("fast-check"));
// Code under test
const contains = (text, pattern) => text.indexOf(pattern) >= 0;
// Properties
describe('properties', () => {
    // string text always contains itself
    it('should always contain itself', () => {
        fast_check_1.default.assert(fast_check_1.default.property(fast_check_1.default.string(), (text) => contains(text, text)));
    });
    // string a + b + c always contains b, whatever the values of a, b and c
    it('should always contain its substrings', () => {
        fast_check_1.default.assert(fast_check_1.default.property(fast_check_1.default.string(), fast_check_1.default.string(), fast_check_1.default.string(), (a, b, c) => {
            // Alternatively: no return statement and direct usage of expect or assert
            return contains(a + b + c, b);
        }));
    });
});
