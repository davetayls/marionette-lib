/// <reference path="../../typings/tsd.d.ts" />
import EventedClass = require('../utilities/EventedClass');
import fluxInterfaces = require('./interfaces');
import Dispatcher = require('./Dispatcher');
export declare class Store extends EventedClass.EventedClass {
    constructor(dispatcher: Dispatcher.Dispatcher);
    protected stateHasChanged: boolean;
    protected dispatcher: Dispatcher.Dispatcher;
    dispatchToken: string;
    dispatch(payload: fluxInterfaces.IPayload): void;
    protected stateChanged(): void;
    notifyIfStateChanged(): void;
    addChangeListener(callback: () => void): void;
    removeChangeListener(callback: () => void): void;
}
