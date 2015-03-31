/// <reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var _ = require('underscore');
var Marionette = require('backbone.marionette');
var $ = require('jquery');
var globalStateInitialized = false;
var SCROLLABLE_CLASS = 'Scrollables__container';
function initGlobalScrollableState() {
    globalStateInitialized = true;
    // Disable scroll for the document, we'll handle it ourselves
    $(document).on("touchmove", function (e) {
        e.preventDefault();
    });
    $(document.body).addClass('Scrollables--attached').on("touchstart", "." + SCROLLABLE_CLASS, function (e) {
        // If the element is scrollable (content overflows), then...
        if (this.scrollHeight !== this.clientHeight) {
            // If we're at the top, scroll down one pixel to allow scrolling up
            if (this.scrollTop === 0) {
                this.scrollTop = 1;
            }
            // If we're at the bottom, scroll up one pixel to allow scrolling down
            if (this.scrollTop === this.scrollHeight - this.clientHeight) {
                this.scrollTop = this.scrollHeight - this.clientHeight - 1;
            }
        }
        // Check if we can scroll
        this.allowUp = this.scrollTop > 0;
        this.allowDown = this.scrollTop < (this.scrollHeight - this.clientHeight);
        this.lastY = e.originalEvent.pageY;
    }).on("touchmove", "." + SCROLLABLE_CLASS, function (e) {
        var event = e.originalEvent;
        var up = event.pageY > this.lastY;
        var down = !up;
        this.lastY = event.pageY;
        if ((up && this.allowUp) || (down && this.allowDown)) {
            console.log('stop');
            event.stopPropagation();
        }
        else {
            console.log('prevent');
            event.preventDefault();
        }
    });
}
var ScrollablesBehavior = (function (_super) {
    __extends(ScrollablesBehavior, _super);
    function ScrollablesBehavior() {
        _super.apply(this, arguments);
    }
    ScrollablesBehavior.prototype.onShow = function () {
        var _this = this;
        //if (!globalStateInitialized) {
        //  initGlobalScrollableState();
        //}
        _.each(this.options, function (val, key) {
            var $el;
            if (val === 'el') {
                $el = _this.$el;
            }
            else {
                $el = _this.$(val);
            }
            if ($el && $el.length)
                $el.addClass(SCROLLABLE_CLASS);
        });
    };
    return ScrollablesBehavior;
})(Marionette.Behavior);
exports.ScrollablesBehavior = ScrollablesBehavior;
//# sourceMappingURL=Scrollables.js.map