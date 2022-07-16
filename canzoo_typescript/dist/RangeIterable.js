"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeIterable = void 0;
var RangeIterable = /** @class */ (function () {
    function RangeIterable(from, to) {
        this.from = from;
        this.to = to;
    }
    RangeIterable.prototype[Symbol.iterator] = function () {
        var that = this;
        var currentValue = that.from;
        return {
            next: function () {
                var value = currentValue < that.to ? currentValue++ : undefined;
                var done = value === undefined;
                return { value: value, done: done };
            }
        };
    };
    return RangeIterable;
}());
exports.RangeIterable = RangeIterable;
//# sourceMappingURL=RangeIterable.js.map