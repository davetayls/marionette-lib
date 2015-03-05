
var StaticController = require('../../src/controllers/Static').StaticController;

describe('Static Controller', function() {
  describe('creation', function() {
    it('should be created with a model', function() {
      var model, st;
      model = {
        foo: 'bar'
      };
      st = new StaticController({
        model: model
      });
      expect(st.model).to.equal(model);
    });
  });
  describe('attributes', function() {
    it('can allow an array of attributes', function() {
      var st = new StaticController({
        model: {
          foo: 'bar'
        }
      });
      st.attributes = function(){
        return {
          foo: 'foo'
        };
      };
      st.name = 'component';
      st.template = function() {
        return function(context) {
          return "";
        };
      };
      var html = st.render({
        hash: {
          foo: 'baz'
        }
      });
      expect(html).to.match(/foo="baz"/);
    });
  });
  describe('context', function() {
    return it('should not polute context', function() {
      var childTemplate, st;
      st = new StaticController({
        model: {
          foo: 'bar'
        }
      });
      st.name = 'component';
      st.contextProperties = {
        foo: 'bar'
      };
      st.template = function() {
        return function(context) {
          expect(context.foo).to.equal('baz');
          return "<div>" + context.__body__ + "</div>";
        };
      };
      childTemplate = function(context) {
        expect(context.foo).to.equal('bar');
        return '<h1>baz</h1>';
      };
      return st.render({
        hash: {
          foo: 'baz'
        },
        fn: childTemplate
      });
    });
  });
});

