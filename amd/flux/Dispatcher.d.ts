/// <reference path="../../typings/tsd.d.ts" />
import flux = require('flux');
import fluxInterfaces = require('./interfaces');
import IPayload = fluxInterfaces.IPayload;
import actions = require('./actions');
import Store = require('./Store');
export declare class Dispatcher extends flux.Dispatcher<IPayload> {
    constructor();
    stores: Store.Store[];
    payloadQueue: IPayload[];
    dispatching: boolean;
    registerStore(store: Store.Store): string;
    dispatchPayload(): void;
    notifyStoreListeners(): void;
    handlePayload(payload: IPayload): void;
    handleServerAction(action: actions.Action): void;
    handleDeviceAction(action: actions.Action): void;
    handleViewAction(action: actions.Action): void;
}
