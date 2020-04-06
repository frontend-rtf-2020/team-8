export default ({markup}) => {
  return `<!doctype html>
    <html lang="en">
        <head>
           <meta charset="utf-8">
           <title>iTinkoff</title>
        </head>
        <body>
          <script type="text/javascript" src="/dist/bundle.js"></script>
          <div id="root">${markup}</div>

        </body>
    </html>`
}