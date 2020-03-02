const AWS = require("aws-sdk");

const { fetchCurrentMenu } = require("./fetch");
const { buildRss } = require("./rss");

const CoolkevS3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: "coolkev.com" }
});
const DavFoodaS3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: "dav-fooda.kj800x.com" }
});

function writeToS3(S3Client, Key, Body) {
  return new Promise((resolve, reject) => {
    S3Client.upload({ Key, Body, ACL: "public-read" }, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function run() {
  const NOW = new Date();
  const menu = await fetchCurrentMenu();
  const rss = buildRss(menu, NOW);
  if (!rss) {
    return;
  }

  await writeToS3(CoolkevS3, "davenport-fooda-new.rss", rss);
  await writeToS3(DavFoodaS3, "davenport-fooda.rss", rss);
}

module.exports = {
  run
};
