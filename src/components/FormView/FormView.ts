/// <reference path="../../../typings/tsd.d.ts" />

import _ = require('underscore');
import $ = require('jquery');
import BackboneForms = require('backbone-forms');
import templates = require('./templates');

import marionette_lib = require('marionette_lib');
import Layout = marionette_lib.views.Layout;
import ChildHolderView = marionette_lib.views.ChildHolderView;

templates.init();

export interface IFormSchemaItem extends Backbone.IFormSchemaItem {
  icon?:string;
}

export interface IFormSchema {
  [property:string]:IFormSchemaItem;
}

export interface IFormOptions extends Backbone.IFormOptions {
  schema:IFormSchema;
}

export class FormView extends Layout.Layout<Backbone.Model> {
  constructor(options:IFormOptions) {
    this.name = 'FormView';
    this.tagName = 'form';
    this.attributes = { role: 'form' };
    this.template = require('hbs!./FormView');
    this.regions = {
      fieldsRegion: '.FormView__fieldsRegion',
      buttonsRegion: '.FormView__buttonsRegion'
    };
    this.parseIconProperties(options.schema);
    super();
    this.$el.addClass('FormStacked');
    this.fields = new BackboneForms(options);
    this.buttonsHolder = new ChildHolderView.GenericChildHolderView();
  }

  onDestroy():void {
    this.fields.stopListening();
    this.fields = null;
  }

  static DISABLED_CLASS = 'FormView--disabled';
  fields:BackboneForms;
  protected fieldsRegion:Marionette.Region;
  protected buttonsRegion:Marionette.Region;
  buttonsHolder:ChildHolderView.GenericChildHolderView;

  onShow():void {
    this.fieldsRegion.show(this.fields);
    this.buttonsRegion.show(this.buttonsHolder);
  }

  protected parseIconProperties(schema:Backbone.IFormSchema):void {
    _.each(schema, (schemaItem:IFormSchemaItem) => {
      if (schemaItem.icon) {
        schemaItem.title = '<i class="fa fa-' + schemaItem.icon + '"></i>';
      }
    });
  }

  disableForm():void {
    this.$el.addClass(FormView.DISABLED_CLASS);
  }

  enableForm():void {
    this.$el.removeClass(FormView.DISABLED_CLASS);
  }

  validate():Backbone.IFormErrors {
    return this.fields.validate();
  }

  getValue(property?:string):any {
    return this.fields.getValue(property);
  }

  setValue(properties?:any):any {
    return this.fields.setValue(properties);
  }
}

