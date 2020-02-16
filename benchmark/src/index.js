import { Suite } from 'benchmark';

import cnbNPM from 'cnbuilder';
import classcat from 'classcat';
import classnames from 'classnames';
import clsx from 'clsx';
import cnbLocalESNext from '../../dist/cnbuilder.next.esm';
import testData from './data';

const cnbLocalES3 = require('../../dist/cnbuilder');

const libs = {
  'cnbuilder (local es3)': args => cnbLocalES3.call(null, args),
  'cnbuilder (local esnext)': args => cnbLocalESNext.call(null, args),
  'cnbuilder (npm)': args => cnbNPM.call(null, args),
  classcat: args => classcat(args),
  classnames: args => classnames.call(null, args),
  clsx: args => clsx.call(null, args),
};

testData.forEach(test => {
  const suite = new Suite(test.name, {
    onStart: () => {
      console.log(`\n# ${test.name}`);
    },
    onCycle: ev => {
      console.log(String(ev.target));
    },
  });

  Object.entries(libs).forEach(([name, fn]) => {
    suite.add(name, () => fn(test.data));
  });

  suite.run();
});
