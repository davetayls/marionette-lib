/// <reference path="../../../typings/tsd.d.ts" />
import Backbone = require('backbone');
import ItemView = require('../../views/ItemView');
import SpinnerView = require('../SpinnerView/SpinnerView');
export interface INoticeProperties {
    header?: string;
    body?: string;
    buttons?: Marionette.View<Backbone.Model>[];
    canDismiss?: boolean;
    loading?: boolean;
}
export interface INoticeViewOptions extends INoticeProperties, Backbone.ViewOptions<NoticeViewModel> {
}
export declare class NoticeViewModel extends Backbone.Model {
    defaults(): INoticeProperties;
    header: string;
    body: string;
    buttons: Marionette.View<Backbone.Model>[];
    canDismiss: boolean;
    loading: boolean;
}
export declare class NoticeView extends ItemView.ItemView<NoticeViewModel> {
    constructor(options?: INoticeViewOptions);
    _loadingView: SpinnerView.SpinnerView;
    options: INoticeViewOptions;
    onRender(): void;
    canDismiss(): any;
    hide(): JQuery;
    show(): JQuery;
    set(properties: INoticeProperties): JQuery;
    destroyButtons(): void;
    onButtonClicked(): any;
}
