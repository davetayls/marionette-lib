/// <reference path="../../typings/tsd.d.ts" />

import _ = require('underscore');
import Marionette = require('backbone.marionette');
import $ = require('jquery');

export interface IScrollablesOptions {[key:string]:string}

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
    .on("touchstart", "." + SCROLLABLE_CLASS, function (e:any) {
      if (this.scrollHeight !== this.clientHeight) {
        if (this.scrollTop === 0) {
          this.scrollTop = 1;
        }
        if (this.scrollTop === this.scrollHeight - this.clientHeight) {
          this.scrollTop = this.scrollHeight - this.clientHeight - 1;
        }
      }
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
    if (!globalStateInitialized) {
      initGlobalScrollableState();
    }
    _.each(this.options, (val, key) => {
      var $el = this.$(val);
      if ($el.length) $el.addClass(SCROLLABLE_CLASS);
    });
  }

}

