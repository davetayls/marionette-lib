/// <reference path="../../typings/tsd.d.ts" />
export interface IRegistryDestroyable {
    destroy(): any;
}
export interface IRegistryItem {
    region: IRegistryDestroyable;
}
export declare var _registry: {
    [index: string]: IRegistryItem;
};
export declare function register(instance: IRegistryItem, id: string): void;
export declare function unregister(instance: IRegistryItem, id: string): void;
export interface IRegistryState {
    count: number;
    previous: number;
    msg: string;
}
export declare function resetRegistry(): IRegistryState;
export declare function getRegistrySize(): number;
