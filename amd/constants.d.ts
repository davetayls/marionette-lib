export declare class StringConstant {
    val: string;
    constructor(val: string);
    toString(): string;
    matches(value: string): boolean;
}
export declare class EVENT_TYPES extends StringConstant {
    static Change: EVENT_TYPES;
}
export declare class ACTION_SOURCES extends StringConstant {
    static ServerAction: ACTION_SOURCES;
    static ViewAction: ACTION_SOURCES;
    static DeviceAction: ACTION_SOURCES;
}
export declare class DOC_STATUSES extends StringConstant {
    static empty: DOC_STATUSES;
    static fetchingFromServer: DOC_STATUSES;
    static fetchingLocal: DOC_STATUSES;
    static fetched: DOC_STATUSES;
    static creatingOnServer: DOC_STATUSES;
    static updatingOnServer: DOC_STATUSES;
    static deletingOnServer: DOC_STATUSES;
    static deletedOnServer: DOC_STATUSES;
    static deletedLocal: DOC_STATUSES;
    static deleted: DOC_STATUSES;
}
