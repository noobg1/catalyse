const Lab = require('lab');
const Chai = require('chai');
const { serialize } = require('../src/serialize');
const { deserialize } = require('../src/deserialize');

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

    lab.it('should return the right text', (done) => {
      const expected = 'aa=bb;cc=dd;ee=ff\ngg=hh;\nii=jj;kk=ll\nmm=nn;oo=pp\n';
      const input = [
        { aa: 'bb', cc: 'dd', ee: 'ff' },
        { gg: 'hh', '\nii': 'jj', kk: 'll' },
        { mm: 'nn', oo: 'pp' }
      ];
      const result = serialize(input);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return the right text', (done) => {
      const expected = 'verylongkey=\n';
      const input = [{ verylongkey: '' }];
      const result = serialize(input);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return the right text', (done) => {
      const input = 'vue=light;angular=mature;react=trust\nhapi=mature;express=quick\n';
      const result = deserialize(input);
      expect(serialize(result)).to.eqls(input);
      done();
    });

    lab.it('should return the right text', (done) => {
      const expected = 'key1=va lu e1;key2=value2\nke yA=va lu eA\n';
      const input = [
        {
          key1: 'va lu e1',
          key2: 'value2'
        },
        {
          'ke yA': 'va lu eA'
        }
      ];
      const result = serialize(input);
      expect(result).to.eqls(expected);
      done();
    });

    lab.it('should return the right text', (done) => {
      const expected = 'سلسلة عشوائية=சீரற்ற சரம்;ಯಾದೃಚ್ಛಿಕ ಸ್ಟ್ರಿಂಗ್=यादृच्छिक स्ट्रिंग\nkeyA=สตริงแบบสุ่ม\n';
      const input = [
        {
          'سلسلة عشوائية': 'சீரற்ற சரம்',
          'ಯಾದೃಚ್ಛಿಕ ಸ್ಟ್ರಿಂಗ್': 'यादृच्छिक स्ट्रिंग'
        },
        {
          keyA: 'สตริงแบบสุ่ม'
        }
      ];
      const result = serialize(input);
      console.log(JSON.stringify(result, null, 2));
      expect(result).to.eqls(expected);
      done();
    });
  });
});
