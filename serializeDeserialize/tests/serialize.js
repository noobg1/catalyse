const Lab = require('lab');
const Chai = require('chai');
const { serialize } = require('../src/serialize');

exports.lab = Lab.script();
const { lab } = exports;
const { expect } = Chai;

lab.experiment('Serialize', () => {
  lab.describe('function', () => {
    lab.it('should return the right text', (done) => {
      const expected = 'key1=value1;key2=value2\nkeyA=valueA\n';
      const input = [
        {
          key1: 'value1',
          key2: 'value2'
        },
        {
          keyA: 'valueA'
        }
      ];
      const result = serialize(input);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return the right text', (done) => {
      const expected = '1=2;3=4;5=6;7=8\n1=2;3=4;5=6;7=8\n';
      const input = [{
        1: '2', 3: '4', 5: '6', 7: '8'
      },
      {
        1: '2', 3: '4', 5: '6', 7: '8'
      }];
      const result = serialize(input);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return the right text', (done) => {
      const expected = '1==2\n';
      const input = [{ 1: '=2' }];
      const result = serialize(input);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return the right text', (done) => {
      const expected = '1==2#$%^&*\n5=6;3()_=\n4;;7=8\n';
      const input = [
        { 1: '=2#$%^&*' },
        { 5: '6', '3()_': '\n4', ';7': '8' }
      ];
      const result = serialize(input);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return the right text', (done) => {
      const expected = '';
      const input = [
        { }
      ];
      const result = serialize(input);
      expect(result).to.eqls(expected);
      done();
    });
  });
});
