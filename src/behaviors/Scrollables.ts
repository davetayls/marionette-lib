/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import Marionette = require('backbone.marionette');
import $ = require('jquery');

export interface IScrollablesOptions {[key:string]:string
}

var globalStateInitialized = false;
var SCROLLABLE_CLASS = 'Scrollables__container';

function initGlobalScrollableState() {
  globalStateInitialized = true;
  // Disable scroll for the document, we'll handle it ourselves
  $(document).on("touchmove", function (e) {
    e.preventDefault();
  });
  $(document.body)
    .addClass('Scrollables--attached')

    // Check if we should allow scrolling up or down
    .on("touchstart", "." + SCROLLABLE_CLASS, function (e:any) {

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
    })

    .on("touchmove", "." + SCROLLABLE_CLASS, function (e:any) {
      var event = e.originalEvent;
      var up = event.pageY > this.lastY;
      var down = !up;
      this.lastY = event.pageY;
      if ((up && this.allowUp) || (down && this.allowDown)) {
        console.log('stop');
        event.stopPropagation();
      } else {
        console.log('prevent');
        event.preventDefault();
      }
    });
}


export class ScrollablesBehavior extends Marionette.Behavior {

  options:IScrollablesOptions;

  onShow() {
    //if (!globalStateInitialized) {
    //  initGlobalScrollableState();
    //}
    _.each(this.options, (val, key) => {
      var $el:JQuery;
      if (val === 'el') {
        $el = this.$el;
      } else {
        $el = this.$(val);
      }
      if ($el && $el.length) $el.addClass(SCROLLABLE_CLASS);
    });
  }

}

