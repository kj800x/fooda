const { fetchCurrentMenu } = require("./fetch");
const { buildRss } = require("./rss");

const NOW = new Date();

const main = () => fetchCurrentMenu().then(menu => buildRss(menu, NOW));

main()
  .then(console.log)
  .catch(console.error);
