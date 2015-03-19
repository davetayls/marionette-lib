/// <reference path="../../../typings/tsd.d.ts" />
import Backbone = require('backbone');
import ItemView = require('../../views/ItemView');
export interface IAlertOptions extends Backbone.ViewOptions<Backbone.Model> {
    message: string;
    alertType: string;
}
export declare class AlertComponent extends ItemView.ItemView<Backbone.Model> {
    constructor(options: IAlertOptions);
    templateHelpers(): {
        message: any;
    };
    onShow(): void;
}
