
define(function(require){

  var RouterController = require('controllers/RouterController');

  describe('RouterController', function(){

    it('can create a new instance', function (){
      controller = new RouterController()
      expect(controller).to.be.instanceOf(RouterController);
    });

    describe('authorize method', function(){
      it('should not run method if not authorized', function(){
        var fooFn = sinon.spy();
        var ctrl = new RouterController({
          authorizeAction: function(fnName, actionFn){
            expect(fnName).to.equal('foo');
            expect(actionFn).to.equal(fooFn);
            return false;
          },
          actions: {
            foo: fooFn
          }
        });
        expect(ctrl.foo).be.a('function');
        ctrl.foo();
        expect(fooFn).not.have.been.called;
      });

      it('should be able to pass in a config object for the action', function(){
        var fooFn = sinon.spy();
        var ctrl = new RouterController({
          actions: {
            foo: {
              fn: fooFn
            }
          }
        });
        expect(ctrl.foo).to.be.a('function');
        ctrl.foo();
        expect(fooFn).to.have.been.called;
      });

      it('should be able to define a default policy', function(){
        var fooFn = sinon.spy();
        var barFn = sinon.spy();
        var ctrl = new RouterController({
          defaultPolicy: new RouterController.ActionPolicy({
            isAuthorized: function(actionName, actionConfig){
              if (actionName === 'foo'){
                return false;
              } else {
                return true;
              }
            }
          }),
          actions: {
            foo: {
              fn: fooFn
            },
            bar: barFn
          }
        });
        expect(ctrl.foo).to.be.a('function');
        expect(ctrl.bar).to.be.a('function');
        ctrl.foo();
        ctrl.bar();
        expect(fooFn).not.been.called;
        expect(barFn).have.been.called;
      });

      it('should be able to define a policy on the action', function(){
        var fooFn = sinon.spy();
        var barFn = sinon.spy();
        var ctrl = new RouterController({
          actions: {
            foo: {
              policy: new RouterController.ActionPolicy({
                isAuthorized: function(actionName, actionConfig){
                  if (actionName === 'foo'){
                    return false;
                  } else {
                    return true;
                  }
                }
              }),
              fn: fooFn
            },
            bar: barFn
          }
        });
        expect(ctrl.foo).to.be.a('function');
        expect(ctrl.bar).to.be.a('function');
        ctrl.foo();
        ctrl.bar();
        expect(fooFn).not.been.called;
        expect(barFn).have.been.called;

      });
    });

  });

});
