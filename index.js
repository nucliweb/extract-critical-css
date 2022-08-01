#!/usr/bin/env node
const argv = require("yargs/yargs")(process.argv.slice(2)).argv;
const fs = require("fs");
const Crittr = require("crittr");

const URL = argv.url || "https://joanleon.dev";

Crittr({
  urls: [URL],
  device: {
    width: 1920,
    height: 1080,
  },
  pageLoadTimeout: 10000,
})
  .then(({ critical, rest }) => {
    fs.writeFile("critical.css", critical, function (err) {
      if (err) return console.log(err);
      console.log(`🚀 Copied the Critical CSS of ${URL} to critical.css`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
