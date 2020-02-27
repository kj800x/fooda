const { fetchCurrentMenu } = require("./fetch");
const { buildRss } = require("./rss");

const main = () => fetchCurrentMenu().then(buildRss);

main()
  .then(console.log)
  .catch(console.error);
