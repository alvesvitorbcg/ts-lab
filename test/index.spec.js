"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_check_1 = __importDefault(require("fast-check"));
function add(a, b) {
    return a + b;
}
describe('add', () => {
    it('should be commutative', () => {
        fast_check_1.default.assert(fast_check_1.default.property(fast_check_1.default.integer(), fast_check_1.default.integer(), (a, b) => {
            console.log(a, b);
            return add(a, b) === add(b, a);
        }));
    });
    it('should be associative', () => {
        fast_check_1.default.assert(fast_check_1.default.property(fast_check_1.default.integer(), fast_check_1.default.integer(), fast_check_1.default.integer(), (a, b, c) => {
            console.log(a, b, c);
            return add(a, add(b, c)) === add(add(a, b), c);
        }));
    });
});
