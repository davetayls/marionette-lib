declare module Backbone {

  export interface IFormSchema {
    [property:string]:IFormSchemaItem;
  }

  export interface IFormSchemaItem {
    type:any;
    title?:string;
    titleHTML?:string;
    validators?:any[];
    help?:string;
    editorClass?:string;
    editorAttrs?:{[attr:string]:any};
    fieldClass?:string;
    fieldAttrs?:{[attr:string]:any};
    template?:string;
  }

  export interface IFormOptions extends Backbone.ViewOptions<Backbone.Model> {
    idPrefix:string;
    schema:IFormSchema;
    model?:Backbone.Model;
    data?:any;
    submitButton?:string;
  }

  export interface IFormErrors {
    [property:string]:any;
  }

  export interface IFormCommitOptions {
    validate:boolean;
  }

  export interface IFormEditorOptions {
    id:string;
    model:Backbone.Model;
    key:string;
    value:any;
    schema:IFormSchemaItem;
    validators:any[];
    form:any;
  }

}

declare module 'backbone-forms' {

  class Form extends Backbone.View<Backbone.Model> {
    constructor(options:Backbone.IFormOptions);
    static template:string;

    validate():Backbone.IFormErrors;
    commit(options:Backbone.IFormCommitOptions):Backbone.IFormErrors;
    setValue(properties?:any):void;
    getValue(property?:string):any;
  }

  module Form {
    export class Fieldset extends Backbone.View<Backbone.Model> {
    }
    export class Field extends Backbone.View<Backbone.Model> {
    }
    export class NestedField extends Backbone.View<Backbone.Model> {
    }
    export module editors {
      /**
       * Base editor (interface). To be extended, not used directly
       */
      export class Base extends Backbone.View<Backbone.Model> {
        constructor(options:Backbone.IFormEditorOptions);
        defaultValue:any;
        hasFocus:boolean;
        schema:Backbone.IFormSchemaItem;
      }
    }
  }

  export = Form;

}
