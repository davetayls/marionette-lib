var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var StringConstant = (function () {
    function StringConstant(val) {
        this.val = val;
    }
    StringConstant.prototype.toString = function () {
        return this.val;
    };
    StringConstant.prototype.matches = function (value) {
        return this.toString() === value;
    };
    return StringConstant;
})();
exports.StringConstant = StringConstant;
var EVENT_TYPES = (function (_super) {
    __extends(EVENT_TYPES, _super);
    function EVENT_TYPES() {
        _super.apply(this, arguments);
    }
    EVENT_TYPES.Change = new EVENT_TYPES('Change');
    return EVENT_TYPES;
})(StringConstant);
exports.EVENT_TYPES = EVENT_TYPES;
var ACTION_SOURCES = (function (_super) {
    __extends(ACTION_SOURCES, _super);
    function ACTION_SOURCES() {
        _super.apply(this, arguments);
    }
    ACTION_SOURCES.ServerAction = new ACTION_SOURCES('ServerAction');
    ACTION_SOURCES.ViewAction = new ACTION_SOURCES('ViewAction');
    return ACTION_SOURCES;
})(StringConstant);
exports.ACTION_SOURCES = ACTION_SOURCES;
//# sourceMappingURL=constants.js.map