
define(function(require){

  var Marionette = require('backbone.marionette');
  require('config/client');

  describe('Marionette Region config', function(){

    describe('show a view after another shows', function(){
      it('Region should include the showWithView method', function(){
        expect(Marionette.Region.prototype.showWithView).be.a('function');
      });
      it('should wait for a view to show', function(){
        var shown = false;
        var parentView = new Marionette.LayoutView({
          regions: {
            myRegion: '.region'
          }
        });
        parentView.template = function(){ return '<div class="region"></div>'; };
        var childView = new Marionette.ItemView();
        childView.template = function(){ return '<h1>hello</h1>'; };
        childView.onShow = function(){
          shown = true;
        };
        parentView.myRegion.showWithView(parentView, childView, {
          immediate: true
        });
        expect(shown).equal(false);
        parentView.render();
        expect(function() { parentView.myRegion._ensureElement(); }).not.throw();
        parentView.trigger('show');
        expect(shown).equal(true);
      });
      it('should show the view straight away', function(){
        var shown = false;
        var parentView = new Marionette.LayoutView({
          regions: {
            myRegion: '.region'
          }
        });
        parentView.template = function(){ return '<div class="region"></div>'; };
        var childView = new Marionette.ItemView();
        childView.template = function(){ return '<h1>hello</h1>'; };
        childView.onShow = function(){
          shown = true;
        };
        parentView.render();
        parentView.trigger('show');
        parentView.myRegion.showWithView(parentView, childView, {
          immediate: true
        });
        expect(shown).equal(true);
        //expect(function() { parentView.myRegion._ensureElement(); }).not.throw();
        //expect(shown).equal(true);
      });
    });

  });

});
