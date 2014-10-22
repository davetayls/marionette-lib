
StaticController = require '../../src/controllers/Static'

describe 'Static Controller', ->
  describe 'creation', ->
    it 'should be created with a model', ->
      model = { foo: 'bar' }
      st = new StaticController {
        model: model
      }
      expect(st.model).to.equal(model)

  describe 'attributes', ->

    it 'can allow an array of attributes', ->
      st = new StaticController {
        model: { foo: 'bar' }
      }
      st.attributes =
        foo: 'foo'
      st.name = 'component'
      st.template = -> (context) -> ""
      html = st.render {
        hash: {
          foo: 'baz'
        }
      }
      expect(html).to.match(/foo="baz"/)

  describe 'context', ->

    it 'should not polute context', ->
      st = new StaticController {
        model: { foo: 'bar' }
      }
      st.name = 'component'
      st.contextProperties =
        foo: 'bar'
      st.template = -> (context) ->
        expect(context.foo).to.equal('baz')
        return "<div>#{context.__body__}</div>"
      childTemplate = (context) ->
        expect(context.foo).to.equal('bar')
        return '<h1>baz</h1>'
      st.render {
        hash: {
          foo: 'baz'
        }
        fn: childTemplate
      }


