define(function (require, exports, module) {var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Exception = (function () {
    function Exception(error) {
        this.error = error;
        console.warn('EXCEPTION', this);
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
var DocumentExistsException = (function (_super) {
    __extends(DocumentExistsException, _super);
    function DocumentExistsException() {
        _super.apply(this, arguments);
    }
    return DocumentExistsException;
})(Exception);
exports.DocumentExistsException = DocumentExistsException;
var NotImplementedException = (function (_super) {
    __extends(NotImplementedException, _super);
    function NotImplementedException() {
        _super.apply(this, arguments);
    }
    return NotImplementedException;
})(Exception);
exports.NotImplementedException = NotImplementedException;
//# sourceMappingURL=Exceptions.js.map
});
