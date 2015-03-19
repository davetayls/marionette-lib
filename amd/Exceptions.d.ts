export interface IException extends Error {
    stack: string;
}
export declare class Exception {
    constructor(error: Error);
    error: Error;
    name: string;
    message: string;
    stack: string;
    toString(): string;
}
export declare class DocumentExistsException extends Exception {
}
export declare class NotImplementedException extends Exception {
}
