const cheerio = require("cheerio");

const parsePage = html => {
  const $ = cheerio.load(html);

  const currentDay = parseInt(
    $(".cal__day__inner__info__label:contains('today')")
      .parent()
      .find(".cal__day__inner__info__date")
      .text(),
    10
  );

  const menuDay = parseInt(
    $(".cal__day--active .cal__day__inner__info__date").text(),
    10
  );

  return {
    currentDay,
    menuDay,
    popups: $(".myfooda-event__name")
      .map((_i, e) => {
        return {
          name: $(e).text(),
          link: $($(e).parents("a")[0]).attr("href")
        };
      })
      .get()
  };
};

module.exports = {
  parsePage
};
