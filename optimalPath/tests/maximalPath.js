/* eslint-disable max-len */
const Lab = require('lab');
const Chai = require('chai');
const { findMaximalPath } = require('../src/maximalPath');

exports.lab = Lab.script();
const { lab } = exports;
const { expect } = Chai;

lab.experiment('Optimal Path', () => {
  lab.describe('findMaximalPath function', () => {
    lab.it('should return a->b->c for given input', (done) => {
      const weightsMap = {
        a: 1,
        b: 2,
        c: 2
      };

      const edgesMap = {
        a: ['b', 'c'],
        b: ['a'],
        c: []
      };
      const startVertex = 'a';
      const expected = {
        path: 'a->b->c',
        totalWeight: 5
      };
      const result = findMaximalPath(startVertex, weightsMap, edgesMap);
      expect(result.path).to.eqls(expected.path);
      expect(result.totalWeight).to.eqls(expected.totalWeight);
      done();
    });

    lab.it('should return "a" for given input with no edges to other nodes', (done) => {
      const weightsMap = {
        a: 1,
        b: 1,
        c: 1
      };

      const edgesMap = {
        a: [],
        b: [],
        c: []
      };
      const startVertex = 'a';
      const expected = {
        path: 'a',
        totalWeight: 1
      };
      const result = findMaximalPath(startVertex, weightsMap, edgesMap);
      expect(result.path).to.eqls(expected.path);
      expect(result.totalWeight).to.eqls(expected.totalWeight);
      done();
    });

    lab.it('should return b->a for given input with one disjoint node', (done) => {
      const weightsMap = {
        a: 4,
        b: 10,
        c: 1
      };

      const edgesMap = {
        a: [],
        b: ['a'],
        c: []
      };
      const startVertex = 'b';
      const expected = {
        path: 'b->a',
        totalWeight: 14
      };
      const result = findMaximalPath(startVertex, weightsMap, edgesMap);
      expect(result.path).to.eqls(expected.path);
      expect(result.totalWeight).to.eqls(expected.totalWeight);
      done();
    });

    lab.it('should return c->b->a for given input with cyclic graph', (done) => {
      const weightsMap = {
        a: 1,
        b: 2,
        c: 3
      };

      const edgesMap = {
        a: ['c'],
        b: ['a'],
        c: ['b']
      };
      const startVertex = 'c';
      const expected = {
        path: 'c->b->a',
        totalWeight: 6
      };
      const result = findMaximalPath(startVertex, weightsMap, edgesMap);
      expect(result.path).to.eqls(expected.path);
      expect(result.totalWeight).to.eqls(expected.totalWeight);
      done();
    });

    lab.it('should return c->b->a-d for given input with cycle on node d', (done) => {
      const weightsMap = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
      };

      const edgesMap = {
        a: ['c', 'd'],
        b: ['a'],
        c: ['b'],
        d: ['d']
      };
      const startVertex = 'c';
      const expected = {
        path: 'c->b->a->d',
        totalWeight: 10
      };
      const result = findMaximalPath(startVertex, weightsMap, edgesMap);
      expect(result.path).to.eqls(expected.path);
      expect(result.totalWeight).to.eqls(expected.totalWeight);
      done();
    });

    lab.it('should return a for given many cyclic inputs to a', (done) => {
      const weightsMap = {
        a: 100
      };

      const edgesMap = {
        a: ['a', 'a', 'a', 'a']
      };
      const startVertex = 'a';
      const expected = {
        path: 'a',
        totalWeight: 100
      };
      const result = findMaximalPath(startVertex, weightsMap, edgesMap);
      expect(result.path).to.eqls(expected.path);
      expect(result.totalWeight).to.eqls(expected.totalWeight);
      done();
    });

    lab.it('should return empty if start node does not exist', (done) => {
      const weightsMap = {
        a: 10,
        b: 50
      };

      const edgesMap = {
        a: ['b']
      };
      const startVertex = 'c';
      const expected = {
        path: '',
        totalWeight: 0
      };
      const result = findMaximalPath(startVertex, weightsMap, edgesMap);
      expect(result.path).to.eqls(expected.path);
      expect(result.totalWeight).to.eqls(expected.totalWeight);
      done();
    });
  });
});
