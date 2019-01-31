/* eslint-disable quotes */
/* eslint-disable max-len */
const Lab = require('lab');
const Chai = require('chai');
const { deserialize } = require('../src/deserialize');

exports.lab = Lab.script();
const { lab } = exports;
const { expect } = Chai;

lab.experiment('Deserialize', () => {
  lab.describe('function', () => {
    lab.it('should return build the map', (done) => {
      const text = 'key1=value1;key2=value2\nkeyA=valueA\n';
      const expected = [
        {
          key1: "value1",
          key2: "value2"
        },
        {
          keyA: "valueA"
        }
      ];
      const result = deserialize(text);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return build the map', (done) => {
      const text = '1=2;3=4;5=6;7=8\n1=2;3=4;5=6;7=8';
      const expected = [{
        1: '2', 3: '4', 5: '6', 7: '8'
      },
      {
        1: '2', 3: '4', 5: '6', 7: '8'
      }];
      const result = deserialize(text);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return build the map', (done) => {
      const text = '1==2\n3=4;5=6;;7=8\n';
      const expected = [{ 1: '=2' }, { 3: '4', 5: '6', ';7': '8' }];
      const result = deserialize(text);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return build the map', (done) => {
      const text = '1=2;3=4;5=6;7=8\n1=2;3=4;5=6;7=8';
      const expected = [{
        1: '2', 3: '4', 5: '6', 7: '8'
      },
      {
        1: '2', 3: '4', 5: '6', 7: '8'
      }];
      const result = deserialize(text);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return build the map', (done) => {
      const text = '1==2#$%^&*\n\n3()_=4;5=6;;7=8\n';
      const expected = [{ 1: '=2#$%^&*' }, { 5: '6', '\n3()_': '4', ';7': '8' }];
      const result = deserialize(text);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return build the map', (done) => {
      const text = '\n';
      const expected = [];
      const result = deserialize(text);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return build the map', (done) => {
      const text = ';';
      const expected = [{ ';': '' }];
      const result = deserialize(text);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return build the map', (done) => {
      const text = 'verylongkey=\n';
      const expected = [{ verylongkey: '' }];
      const result = deserialize(text);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return build the map', (done) => {
      const text = 'aa=bb;cc=dd;ee=ff\ngg=hh;\nii=jj;kk=ll\nmm=nn;oo=pp\n';
      const expected = [
        { aa: 'bb', cc: 'dd', ee: 'ff' },
        { gg: 'hh', '\nii': 'jj', kk: 'll' },
        { mm: 'nn', oo: 'pp' }
      ];
      const result = deserialize(text);
      expect(result).to.eqls(expected);
      done();
    });
  });
});
