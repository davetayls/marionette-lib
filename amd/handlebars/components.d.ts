/// <reference path="../../typings/tsd.d.ts" />
import StaticController = require('../controllers/Static');
export declare function initComponents(components: {
    [key: string]: StaticController.StaticController;
}): void;
