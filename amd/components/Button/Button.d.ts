/// <reference path="../../../typings/tsd.d.ts" />
import Backbone = require('backbone');
import constants = require('../../constants');
import ItemView = require('../../views/ItemView');
export declare class BUTTON_EVENTS extends constants.StringConstant {
    static navigate: BUTTON_EVENTS;
}
export declare class BUTTON_THEME extends constants.StringConstant {
    static default: BUTTON_THEME;
    static inverse: BUTTON_THEME;
    static action: BUTTON_THEME;
    static link: BUTTON_THEME;
    static primary: BUTTON_THEME;
    static secondary: BUTTON_THEME;
}
export declare class BUTTON_SIZE extends constants.StringConstant {
    static default: BUTTON_SIZE;
    static small: BUTTON_SIZE;
    static large: BUTTON_SIZE;
}
export declare class ButtonModel extends Backbone.Model {
    defaults(): {
        name: string;
        icon: string;
        text: string;
        block: boolean;
        theme: BUTTON_THEME;
        size: BUTTON_SIZE;
    };
    name: string;
    icon: string;
    text: string;
    block: boolean;
    theme: BUTTON_THEME;
    size: BUTTON_SIZE;
}
export interface IButtonOptions extends Backbone.ViewOptions<ButtonModel> {
    name: string;
    icon: string;
    text: string;
    block?: boolean;
    theme?: BUTTON_THEME;
    size?: BUTTON_SIZE;
}
export declare class Button extends ItemView.ItemView<ButtonModel> {
    constructor(options?: IButtonOptions);
    className: string;
    text: string;
    navigate(): void;
    setProperties(options: IButtonOptions): void;
    unsetClassNames(): void;
    setClassNames(): void;
}
