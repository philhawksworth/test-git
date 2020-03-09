const fs = require('fs');

const html = `
<html>
  <head><title>Tag to release</title></head>
  <body>
    <h1>I'm tagged therefore I am</h1>
    <p>This commit: ${process.env.COMMIT_REF}</p>
    <p>I wasn't' tagged as a release!/p>
  </body>
</html>
`;

fs.writeFileSync('./dist/index.html', html)
