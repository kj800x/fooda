const fs = require("fs");
const cheerio = require("cheerio");

const $ = cheerio.load(fs.readFileSync("./last_fetch.html"));

console.log("The cheerio of the last fetch is loaded as $");
const repl = require("repl").start("> ");
repl.context.$ = $;
