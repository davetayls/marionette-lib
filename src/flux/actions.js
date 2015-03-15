var Action = (function () {
    function Action(type) {
        this.type = type;
    }
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