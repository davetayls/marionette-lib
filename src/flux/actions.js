var Action = (function () {
    function Action(type) {
        this.type = type;
    }
    Action.prototype.is = function (ActionClass) {
        return this instanceof ActionClass;
    };
    return Action;
})();
exports.Action = Action;
var ActionCreator = (function () {
    function ActionCreator(dispatcher) {
        this.dispatcher = dispatcher;
    }
    return ActionCreator;
})();
exports.ActionCreator = ActionCreator;
//# sourceMappingURL=actions.js.map