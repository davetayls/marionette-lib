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
    static template:(data:any)=>string;

    validate():Backbone.IFormErrors;
    commit(options:Backbone.IFormCommitOptions):Backbone.IFormErrors;
    setValue(properties?:any):void;
    getValue(property?:string):any;
  }

  module Form {
    export class Fieldset extends Backbone.View<Backbone.Model> {
      static template:(data:any)=>string;
    }
    export class Field extends Backbone.View<Backbone.Model> {
      static template:(data:any)=>string;
      static errorClassName:string;
    }
    export class NestedField extends Backbone.View<Backbone.Model> {
      static template:(data:any)=>string;
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
      export class Checkbox extends Base {
        static template:(data:any)=>string;
      }
      export class Date extends Base {
        static template:(data:any)=>string;
      }
      export class DateTime extends Base {
        static template:(data:any)=>string;
      }
      export class Hidden extends Base {
        static template:(data:any)=>string;
      }
      export class Number extends Base {
        static template:(data:any)=>string;
      }
      export class Object extends Base {
        static template:(data:any)=>string;
      }
      export class NestedModel extends Object {
        static template:(data:any)=>string;
      }
      export class Password extends Base {
        static template:(data:any)=>string;
      }
      export class Select extends Base {
        static template:(data:any)=>string;
      }
      export class Checkboxes extends Select {
        static template:(data:any)=>string;
      }
      export class Radio extends Select {
        static template:(data:any)=>string;
      }
      export class Text extends Base {
        static template:(data:any)=>string;
      }
      export class TextArea extends Base {
        static template:(data:any)=>string;
      }
      export class List extends Backbone.View<Backbone.Model> {
        static template:(data:any)=>string;
      }
      module List {
        export class Item extends Backbone.View<Backbone.Model> {
          static template:(data:any)=>string;
        }
        export class Object extends Backbone.View<Backbone.Model> {
          static template:(data:any)=>string;
        }
        export class NestedModel extends Backbone.View<Backbone.Model> {
          static template:(data:any)=>string;
        }
      }
    }
  }

  export = Form;

}
