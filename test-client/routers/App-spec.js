define(function (require, exports, module) {

  var Backbone = require('backbone');
  var AppRouter = require('routers/App').AppRouter;

  describe('AppRouter', function(){

    it('can create a new instance', function(){
      router = new AppRouter({
        name: 'RouterName'
      });
      expect(router).to.be.instanceOf(AppRouter);
    });

  });

});
