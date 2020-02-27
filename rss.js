const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const template = ({
  popups,
  dow,
  NOW,
  pubDate
}) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
 <title>Davenport Fooda</title>
 <description>Kevin Johnson's Davenport Fooda RSS feed</description>
 <link>https://fooda.com/my</link>
 <lastBuildDate>${NOW.toUTCString()}</lastBuildDate>
 <pubDate>${pubDate.toUTCString()}</pubDate>
 <ttl>10</ttl>

 ${popups
   .map(
     popup => `
 <item>
 <title>
   ${dow} at Davenport: ${popup.name}
 </title>
 <description></description>
 <link>${popup.link || "https://fooda.com/my"}</link>
 <pubDate>${pubDate.toUTCString()}</pubDate>
</item>
 `
   )
   .join("\n")}
</channel>
</rss>`;

const buildRss = (menuInfo, NOW) => {
  const pubDate = new Date(NOW);
  pubDate.setDate(menuInfo.menuDay);
  pubDate.setMinutes(0);
  pubDate.setHours(6);
  pubDate.setSeconds(0);
  pubDate.setMilliseconds(0);

  const popups =
    menuInfo.currentDay === menuInfo.menuDay ? menuInfo.popups : [];
  const dow = DAYS[pubDate.getDay() - 1];

  return template({ pubDate, NOW, popups, dow });
};

module.exports = {
  buildRss
};
