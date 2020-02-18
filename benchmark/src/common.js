const classnames = require('classnames');
const classcat = require('classcat');
const clsx = require('clsx');
const cnbuilderNpm = require('cnbuilder').cnb;
const cnbuilderLocal = require('../../dist').cnb;

const libraries = {
  'classnames       ': args => classnames.apply(classnames, args),
  'classcat         ': args => classcat.call(classcat, args),
  'clsx             ': args => clsx.apply(clsx, args),
  'cnbuilder (local)': args => cnbuilderLocal.apply(cnbuilderLocal, args),
  'cnbuilder (npm)  ': args => cnbuilderNpm.apply(cnbuilderNpm, args),
};

const testData = [
  {
    name: 'strings',
    data: ['foo', '', 'bar', 'baz', 'bax', 'bux'],
  },
  {
    name: 'objects',
    data: [
      {foo: true, bar: true, bax: true, bux: false},
      {baz: true, bax: false, bux: true},
    ],
  },
  {
    name: 'arrays',
    data: [
      ['foo', 'bar'],
      ['baz', 'bax', 'bux'],
    ],
  },
  {
    name: 'nested arrays',
    data: [
      ['foo', ['bar']],
      ['baz', ['bax', ['bux']]],
    ],
  },
  {
    name: 'objects nested in arrays',
    data: [
      ['foo', {bar: true, bax: true, bux: false}],
      ['bax', {bax: false, bux: true}],
    ],
  },
  {
    name: 'mixed',
    data: ['foo', 'bar', {bax: true, bux: false}, ['baz', {bax: false, bux: true}]],
  },
  {
    name: 'mixed with wrong data',
    data: [
      'foo',
      'bar',
      undefined,
      () => {
      },
      {bax: true, bux: false, 123: true},
      ['baz', {bax: false, bux: true, abc: null}, {}],
    ],
  },
];

require('./run')(testData, libraries);
