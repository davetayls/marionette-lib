
define(function(require){

  var Backbone = require('backbone');
  var AppRouter = require('routers/App').AppRouter;

  describe('AppRouter', function(){

    it('can create a new instance', function(){
      router = new AppRouter()
      expect(router).to.be.instanceOf(AppRouter);
    });

  });

});
