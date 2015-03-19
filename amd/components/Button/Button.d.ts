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
}
export declare class ButtonModel extends Backbone.Model {
    defaults(): {
        name: string;
        icon: string;
        text: string;
        theme: BUTTON_THEME;
    };
    name: string;
    icon: string;
    text: string;
    theme: BUTTON_THEME;
}
export interface IButtonOptions extends Backbone.ViewOptions<ButtonModel> {
    name: string;
    icon: string;
    text: string;
    theme?: BUTTON_THEME;
}
export declare class Button extends ItemView.ItemView<ButtonModel> {
    constructor(options?: IButtonOptions);
    className: string;
    navigate(): void;
    setOptions(options: IButtonOptions): void;
}
