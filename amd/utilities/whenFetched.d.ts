/// <reference path="../../typings/tsd.d.ts" />
import Q = require('q');
export interface IWhenFetchedEntity {
    _fetch: Q.Promise<IFetchResolution>;
}
export interface IFetchResolution {
    response: any;
    options: any;
    status: number;
    failed: boolean;
}
export declare function whenFetched(entities: IWhenFetchedEntity[], callback: (errors?: any[]) => any): void;
