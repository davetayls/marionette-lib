
import Backbone = require('backbone');
import AppRouters = require('../../src/routers/App');
import AppRouter = AppRouters.AppRouter;

describe('AppRouter', function() {

  it('can create a new instance', function() {
    var router = new AppRouter({
      name: 'RouterName',
      routes: {}
    });
    expect(router).to.be.instanceOf(AppRouter);
  });

});

