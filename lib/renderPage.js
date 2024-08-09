const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

function hashFile(fpath) {
  const content = fs.readFileSync(fpath, "utf8");
  return crypto.createHash("md5").update(content, "utf8").digest("hex");
}

/* eslint max-len: off */
module.exports = (
  {
    title = "Jonas Achouri Sihlén",
    description = "Jonas Achouri Sihlén's site",
    url = "/",
    image = "/public/images/iamjas_profile.jpg",
  },
  content,
) => {
  const staticCssHash = hashFile(
    path.join(__dirname, "..", "public", "css", "main.css"),
  );

  return `
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, minimum-scale=1" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://iamjas.se{url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:site_name" content="iamjas.se" />
    <meta property="fb:app_id" content="1775481339348651" />
    <meta name="author" property="og:author" content="iamjas.se" />
    <meta charset="UTF-8" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@thenimblegeek" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
    <link rel="icon" type="image/png" href="//www.gravatar.com/avatar/03637ef1a5121222c8db0ed48c34e124.png?s=32" />
    <link href="//fonts.googleapis.com/css?family=Lato:300,400|Questrial|Raleway:400,100" rel='stylesheet' type='text/css' />
    <link type="text/css" rel="stylesheet" href="/public/css/main.css?${staticCssHash}"/>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet"/>

   <script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-32547130-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  </script>
  </head>
  <body>
    <header>
      <a href="/">Jonas Achouri Sihlén</a>     
    </header>
     <a target="_blank" href="https://replit.com/@thenimblegeek/mysite/" class="replit"><img src="//upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/220px-New_Replit_Logo.svg.png"/>
     </a>     
    ${content}
  </body>
  
    <footer>
      <p>&copy; 2024 <a href="https://replit.com/@amasad/my-blog">Amjad Asad</a>. All rights reserved.</p>
    </footer>
</html>
`;
};
