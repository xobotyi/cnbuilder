const benchmark = require('benchmark');

const outputFn =
  typeof document === 'undefined'
    ? console.log
    : text => {
        document.body.innerHTML += `${text.replace('\n', '<br/>')}<br/>`;
      };

module.exports = (testData, libraries) => {
  testData.forEach(test => {
    const suite = new benchmark.Suite(test.name, {
      onStart: () => {
        outputFn(`\n# ${test.name}`);
      },
      onCycle: ev => {
        outputFn(`  ${String(ev.target)}`);
      },
      onComplete: ev => {
        outputFn(` Fastest is ${ev.currentTarget.filter('fastest').map('name')}`);
      },
    });

    Object.entries(libraries).forEach(([name, fn]) => {
      suite.add(name, () => fn(test.data));
    });

    suite.run();
  });
};
