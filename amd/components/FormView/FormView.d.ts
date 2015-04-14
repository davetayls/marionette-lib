/// <reference path="../../../typings/tsd.d.ts" />
import BackboneForms = require('backbone-forms');
import marionette_lib = require('marionette_lib');
import Layout = marionette_lib.views.Layout;
import ChildHolderView = marionette_lib.views.ChildHolderView;
export interface IFormSchemaItem extends Backbone.IFormSchemaItem {
    icon?: string;
}
export interface IFormSchema {
    [property: string]: IFormSchemaItem;
}
export interface IFormOptions extends Backbone.IFormOptions {
    schema: IFormSchema;
}
export declare class FormView extends Layout.Layout<Backbone.Model> {
    constructor(options: IFormOptions);
    onDestroy(): void;
    static DISABLED_CLASS: string;
    fields: BackboneForms;
    protected fieldsRegion: Marionette.Region;
    protected buttonsRegion: Marionette.Region;
    buttonsHolder: ChildHolderView.GenericChildHolderView;
    onShow(): void;
    protected parseIconProperties(schema: Backbone.IFormSchema): void;
    disableForm(): void;
    enableForm(): void;
    validate(): Backbone.IFormErrors;
    getValue(property?: string): any;
    setValue(properties?: any): any;
}
