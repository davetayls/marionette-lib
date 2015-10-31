var RouterController = require('../../src/controllers/RouterController');
describe('RouterController', function () {
    it('can create a new instance', function () {
        var controller = new RouterController.RouterController();
        expect(controller).to.be.instanceOf(RouterController.RouterController);
    });
    describe('authorize method', function () {
        it('should not run method if not authorized', function () {
            var fooFn = sinon.spy();
            var ctrl = new RouterController.RouterController({
                authorizeAnAction: function (fnName, actionConfig) {
                    expect(fnName).to.equal('foo');
                    expect(actionConfig.fn).to.equal(fooFn);
                    return false;
                },
                actionUnauthorized: function () {
                },
                actions: {
                    foo: fooFn
                }
            });
            expect(ctrl.foo).be.a('function');
            ctrl.foo();
            expect(fooFn).not.have.been.called;
        });
        it('should be able to pass in a config object for the action', function () {
            var fooFn = sinon.spy();
            var ctrl = new RouterController.RouterController({
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
        it('should be able to define a default policy', function () {
            var fooFn = sinon.spy();
            var barFn = sinon.spy();
            var ctrl = new RouterController.RouterController({
                defaultPolicy: new RouterController.ActionPolicy({
                    isAuthorized: function (actionName, actionConfig) {
                        if (actionName === 'foo') {
                            return false;
                        }
                        else {
                            return true;
                        }
                    }
                }),
                actionUnauthorized: function () {
                },
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
        it('should be able to define a policy on the action', function () {
            var fooFn = sinon.spy();
            var barFn = sinon.spy();
            var ctrl = new RouterController.RouterController({
                actionUnauthorized: function () {
                },
                actions: {
                    foo: {
                        policy: new RouterController.ActionPolicy({
                            isAuthorized: function (actionName, actionConfig) {
                                if (actionName === 'foo') {
                                    return false;
                                }
                                else {
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
        it('should throw an error if an action is not authorized', function () {
            var fooFn = sinon.spy();
            var ctrl = new RouterController.RouterController({
                defaultPolicy: new RouterController.ActionPolicy({
                    isAuthorized: function () {
                        return false;
                    }
                }),
                actions: {
                    foo: fooFn
                }
            });
            function fn() {
                ctrl.foo();
            }
            expect(fn).to.throw();
            expect(fooFn).not.been.called;
        });
        it('should allow handling individual unauthorized action', function () {
            var fooFn = sinon.spy();
            var unAuthCalled = false;
            var ctrl = new RouterController.RouterController({
                defaultPolicy: new RouterController.ActionPolicy({
                    isAuthorized: function () {
                        return false;
                    }
                }),
                actions: {
                    foo: {
                        fn: fooFn,
                        unauthorized: function (actionName, actionConfig) {
                            expect(actionName).to.equal('foo');
                            expect(actionConfig).to.be.a('object');
                            unAuthCalled = true;
                        }
                    }
                }
            });
            function fn() {
                ctrl.foo();
            }
            expect(fn).not.to.throw();
            expect(fooFn).not.been.called;
            expect(unAuthCalled).to.be.true;
        });
        it('should pass unauthorized catch for child actions', function () {
            var fooFn = sinon.spy();
            var childFn = sinon.spy();
            var unAuthCalled = false;
            var ctrl = new RouterController.RouterController({
                actions: {
                    child: {
                        policy: new RouterController.ActionPolicy({
                            isAuthorized: function () {
                                return false;
                            }
                        }),
                        fn: childFn
                    },
                    foo: {
                        fn: function () {
                            fooFn();
                            this.child();
                        },
                        unauthorized: function (actionName, actionConfig) {
                            expect(actionName).to.equal('foo');
                            expect(actionConfig).to.be.a('object');
                            expect(actionConfig.internalActionError).to.be.a('object');
                            expect(actionConfig.internalActionError.name).to.equal('ActionUnauthorized');
                            expect(actionConfig.internalActionError.actionName).to.equal('child');
                            unAuthCalled = true;
                        }
                    }
                }
            });
            function fn() {
                ctrl.foo();
            }
            expect(fn).not.to.throw();
            expect(childFn).not.been.called;
            expect(fooFn).been.called;
            expect(unAuthCalled).to.be.true;
        });
    });
});
//# sourceMappingURL=RouterControllerTests.js.map