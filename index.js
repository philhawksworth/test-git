const fs = require('fs');

const html = `
<html>
  <head><title>Tag to release</title></head>
  <body>
    <h1>I'm tagged therefore I am</h1>
    <p>This commit: ${process.env.COMMIT_REF}</p>
    <p>I was tagged v20-release, so you should see me now</p>
  </body>
</html>
`;

fs.writeFileSync('./dist/index.html', html)
