/// <reference path="../../typings/tsd.d.ts" />

import DebouncedDocContainer = require('../../src/utilities/DebouncedDocContainer');

describe('DebouncedDocContainer', function() {

  it('can create a new instance', function() {
    var docs = new DebouncedDocContainer.DebouncedDocContainer<
      DebouncedDocContainer.IDocContainerItem
      >();
    expect(docs).instanceOf(DebouncedDocContainer.DebouncedDocContainer);
  });

  describe('put new docs', function() {
    var docs:DebouncedDocContainer.DebouncedDocContainer<
      {id:number;name?:string}
      >;

    beforeEach(function() {
      docs = new DebouncedDocContainer.DebouncedDocContainer<
        {id:number;name?:string}
        >();
    });

    it('should add a new doc', function() {
      expect(docs).lengthOf(0);
      docs.put({ id: 1, name: 'foo' });
      expect(docs).lengthOf(1);
    });

    it('should throw if try to put same id', function() {
      expect(docs).lengthOf(0);
      docs.put({ id: 1, name: 'foo' });
      function putExisting() {
        docs.put({ id: 1, name: 'bar' });
      }
      expect(putExisting).to.throw();
    });

  });

  describe('docTimeToLive', function() {

    it('should set a null expires when 0', function() {
      var docs = new DebouncedDocContainer.DebouncedDocContainer<
        DebouncedDocContainer.IDocContainerItem
        >();
      docs.docTimeToLive = 0;
      docs.put({ id: 1 });
      expect(docs.entryById(1).expires).be.null;
    });

  });

  describe('merging', function() {
    var docs:DebouncedDocContainer.DebouncedDocContainer<
      {id:number;name?:string}
      >;

    beforeEach(function() {
      docs = new DebouncedDocContainer.DebouncedDocContainer<
        {id:number;name?:string}
        >();
    });

    it('should add a doc to the list', function() {
      expect(docs.length).equal(0);
      var mergeResult = docs.mergeDoc({ id: 1 });
      expect(docs.length).equal(1);
      expect(mergeResult.added).to.equal(true);
      expect(mergeResult.merged).to.equal(false);
      expect(mergeResult.changedProperties).to.length(1);
    });

    it('should merge an existing doc property', function() {
      expect(docs.length).equal(0);
      docs.put({ id: 1, name: 'foo' });
      var mergeResult = docs.mergeDoc({ id: 1, name: 'bar' });
      expect(docs.length).equal(1);
      expect(docs.byId(1).name).equal('bar');
      expect(mergeResult.added).to.equal(false);
      expect(mergeResult.merged).to.equal(true);
      expect(mergeResult.changedProperties).to.length(1);
    });

    it('should merge multiple documents', function() {
      expect(docs.length).equal(0);
      docs.put({ id: 1, name: 'foo' });
      docs.put({ id: 2, name: 'bar' });
      var mergeResult = docs.mergeMultiple([
        { id: 1, name: 'baz' },
        { id: 3, name: 'me' }
      ]);
      expect(docs).lengthOf(3);
      expect(docs.byId(1).name).equal('baz');
      expect(docs.byId(2).name).equal('bar');
      expect(docs.byId(3).name).equal('me');
      expect(mergeResult[0].merged).equal(true);
    });

  });

});

