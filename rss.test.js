const { buildRss } = require("./rss");

describe("rss", () => {
  it("works happy path", () => {
    expect(
      buildRss({
        currentDay: 27,
        menuDay: 27,
        popups: [
          {
            link:
              "http://app.fooda.com/accounts/1729/popup/menu_page/P0733968/items?filterable%5Bvendor_id%5D=6563",
            name: "Jersey Mike's"
          },
          {
            link:
              "http://app.fooda.com/accounts/1729/popup/menu_page/P0733968/items?filterable%5Bvendor_id%5D=4785",
            name: "Brothers Restaurant Tacos"
          }
        ]
      })
    ).toMatchSnapshot();
  });

  it("works missing link", () => {
    expect(
      buildRss({
        currentDay: 27,
        menuDay: 27,
        popups: [
          {
            name: "Jersey Mike's"
          },
          {
            name: "Brothers Restaurant Tacos"
          }
        ]
      })
    ).toMatchSnapshot();
  });
  it("works just one popup", () => {
    expect(
      buildRss({
        currentDay: 27,
        menuDay: 27,
        popups: [
          {
            link:
              "http://app.fooda.com/accounts/1729/popup/menu_page/P0733968/items?filterable%5Bvendor_id%5D=4785",
            name: "Brothers Restaurant Tacos"
          }
        ]
      })
    ).toMatchSnapshot();
  });
  it("works no popups", () => {
    expect(
      buildRss({
        currentDay: 27,
        menuDay: 27,
        popups: []
      })
    ).toMatchSnapshot();
  });
  it("works menu not today", () => {
    expect(
      buildRss({
        currentDay: 25,
        menuDay: 27,
        popups: [
          {
            link:
              "http://app.fooda.com/accounts/1729/popup/menu_page/P0733968/items?filterable%5Bvendor_id%5D=6563",
            name: "Jersey Mike's"
          },
          {
            link:
              "http://app.fooda.com/accounts/1729/popup/menu_page/P0733968/items?filterable%5Bvendor_id%5D=4785",
            name: "Brothers Restaurant Tacos"
          }
        ]
      })
    ).toMatchSnapshot();
  });
});
