
export interface IException extends Error {
  stack:string;
}

interface ConstructorFunction extends Function {
  name:string;
}

export class Exception {

  constructor(error:Error) {
    this.error = error;
  }

  error:Error;

  get name():string {
    return (<ConstructorFunction>this.constructor).name;
  }

  get message():string {
    return this.error.message;
  }

  get stack():string {
    return (<IException>this.error).stack;
  }

  toString() {
    return this.name + ': ' + this.message;
  }

}

export class DocumentExistsException extends Exception {}
export class NotImplementedException extends Exception {}
