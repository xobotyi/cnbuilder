const classnames = require('classnames/dedupe');
const { dcnb } = require('../../dist');

const libraries = {
  'cnbuilder (local)': args => dcnb.apply(dcnb, args),
  classnames: args => classnames.apply(classnames, args),
};

const testData = [
  {
    name: 'strings',
    data: ['foo', '', 'bar', 'baz', 'bax', 'bux', 'baz bux', 'bax', 'bux', 'baz', 'bax', 'bux'],
  },
  {
    name: 'objects',
    data: [
      { foo: true, bar: true, bax: true, bux: false },
      { baz: true, bax: false, bux: true },
      { foo: false, bar: false, bax: false, bux: false },
    ],
  },
  {
    name: 'arrays',
    data: [
      ['foo', '', 'bar', 'baz bax', 'bax', 'bux'],
      ['baz', 'bax', 'bux', 'baz foo', 'bax', 'bux'],
    ],
  },
  {
    name: 'nested arrays',
    data: [
      ['foo', '', 'bar', ['baz', 'bax', 'bux']],
      ['baz', 'bax', 'bux', ['baz', 'bax', 'bux']],
    ],
  },
  {
    name: 'objects nested in arrays',
    data: [
      ['foo', '', 'bar', { foo: true, bar: true, bax: true, bux: false }],
      ['baz', 'bax', 'bux', { foo: false, bar: false, bax: false, bux: false }],
    ],
  },
  {
    name: 'mixed',
    data: ['foo', 'bar', { bax: true, bux: false }, ['baz', { bax: false, bux: true }]],
  },
  {
    name: 'mixed with wrong data',
    data: [
      'foo',
      'bar',
      undefined,
      () => {},
      { bax: true, bux: false, 123: true },
      ['baz', { bax: false, bux: true, abc: null }, {}],
    ],
  },
];

require('./run')(testData, libraries);
