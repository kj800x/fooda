const fs = require("fs");

const nodeFetch = require("node-fetch");
const fetch = require("fetch-cookie")(nodeFetch);

const { SET_COOKIES_URL, MENU_URL } = require("./urls");
const { parsePage } = require("./parsePage");

const fetchCurrentMenu = async () => {
  await (await fetch(SET_COOKIES_URL)).text();
  const text = await (await fetch(MENU_URL)).text();

  if (process.env.WRITE_FETCHED) {
    fs.writeFileSync("./last_fetch.html", text);
  }

  const result = parsePage(text);

  return result;
};

module.exports = {
  fetchCurrentMenu
};
