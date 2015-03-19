define(function (require, exports, module) {var __extends = this.__extends || function (d, b) {
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
    ACTION_SOURCES.DeviceAction = new ACTION_SOURCES('DeviceAction');
    return ACTION_SOURCES;
})(StringConstant);
exports.ACTION_SOURCES = ACTION_SOURCES;
var DOC_STATUSES = (function (_super) {
    __extends(DOC_STATUSES, _super);
    function DOC_STATUSES() {
        _super.apply(this, arguments);
    }
    DOC_STATUSES.empty = new DOC_STATUSES('empty');
    DOC_STATUSES.fetchingFromServer = new DOC_STATUSES('fetchingFromServer');
    DOC_STATUSES.fetchingLocal = new DOC_STATUSES('fetchingLocal');
    DOC_STATUSES.fetched = new DOC_STATUSES('fetched');
    DOC_STATUSES.creatingOnServer = new DOC_STATUSES('creatingOnServer');
    DOC_STATUSES.updatingOnServer = new DOC_STATUSES('updatingOnServer');
    DOC_STATUSES.deletingOnServer = new DOC_STATUSES('deletingOnServer');
    DOC_STATUSES.deletedOnServer = new DOC_STATUSES('deletedOnServer');
    DOC_STATUSES.deletedLocal = new DOC_STATUSES('deletedLocal');
    DOC_STATUSES.deleted = new DOC_STATUSES('deleted');
    return DOC_STATUSES;
})(StringConstant);
exports.DOC_STATUSES = DOC_STATUSES;
//# sourceMappingURL=constants.js.map
});
