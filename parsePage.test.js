const fs = require("fs");

const { parsePage } = require("./parsePage");

describe("parsePage", () => {
  const cases = fs.readdirSync("./test_cases");
  for (var i = 0; i < cases.length; i++) {
    const testCase = cases[i];
    it(`works on ${testCase}`, () => {
      expect(
        parsePage(fs.readFileSync(`./test_cases/${testCase}`))
      ).toMatchSnapshot();
    });
  }
});
