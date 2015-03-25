/// <reference path="../../typings/tsd.d.ts" />
export interface IStaticControllerOptions {
    model?: any;
    templateFn?: (data: any) => string;
}
export declare class StaticController {
    constructor(options?: IStaticControllerOptions);
    name: string;
    options: IStaticControllerOptions;
    model: any;
    tagName: string;
    cloneContext: boolean;
    context: any;
    attributes(hash: any): {
        [index: string]: string;
    };
    contextProperties(): {
        [index: string]: any;
    };
    template(): Function;
    className(hash?: any): string;
    getContext(): any;
    getChildContext(): any;
    mixinHash(context: any, hash: any): any;
    getComponentTemplate(): Function;
    getAttributes(hash: any): string;
    getInnerBody(context: any, fn: (data: any) => string): string;
    render(options?: any): string;
    renderOuterHtml(context: any, options?: any): string;
    renderContentTemplate(context: any): any;
}
