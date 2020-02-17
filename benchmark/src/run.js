const { Suite } = require('benchmark');

module.exports = (testData, libraries) => {
  testData.forEach(test => {
    const suite = new Suite(test.name, {
      onStart: () => {
        console.log(`\n# ${test.name}`);
      },
      onCycle: ev => {
        console.log(String(ev.target));
      },
    });

    Object.entries(libraries).forEach(([name, fn]) => {
      suite.add(name, () => fn(test.data));
    });

    suite.run();
  });
};
