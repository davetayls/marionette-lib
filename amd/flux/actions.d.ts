/// <reference path="../../typings/tsd.d.ts" />
import constants = require('../constants');
import Dispatcher = require('./Dispatcher');
export declare class Action {
    constructor(type?: constants.StringConstant);
    type: constants.StringConstant;
}
export declare class ActionCreator {
    constructor(dispatcher: Dispatcher.Dispatcher);
    dispatcher: Dispatcher.Dispatcher;
}
