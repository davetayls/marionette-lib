define(function (require, exports, module) {var Exception = (function () {
    function Exception(error) {
        this.error = error;
    }
    Object.defineProperty(Exception.prototype, "name", {
        get: function () {
            return this.constructor.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exception.prototype, "message", {
        get: function () {
            return this.error.message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Exception.prototype, "stack", {
        get: function () {
            return this.error.stack;
        },
        enumerable: true,
        configurable: true
    });
    Exception.prototype.toString = function () {
        return this.name + ': ' + this.message;
    };
    return Exception;
})();
exports.Exception = Exception;
//# sourceMappingURL=Exceptions.js.map
});
