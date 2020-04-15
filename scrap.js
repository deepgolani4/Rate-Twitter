const rp=require('request');
const cheerio = require('cheerio');


getTwitter("narendramodi");




function getTwitter(username) {
  const $url=`https://twitter.com/${username}`;
  rp({
    url: $url
  }, function(err, response, body) {
    var $  = cheerio.load(body)("body").children();
    var user_info=[];
    user_info.name = $.find(".css-4rbku5 css-18t94o4 css-901oao r-hkyrab r-1loqt21 r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-qvutc0 .css-901oao css-16my406 r-1qd0xha r-vw2c0b r-ad9z0x r-bcqeeo r-qvutc0 .css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0").text();
    console.log(user_info);
  });
}
