const fs = require("fs")
const path = require("path")

const reportPath = path.join(
  __dirname,
  "cypress/reports/mochareports/report.html",
) // Adjust the path as needed
const customCssPath = path.join(__dirname, "cypress/assets/custom-styles.css")

fs.readFile(reportPath, "utf8", (err, data) => {
  if (err) {
    return console.log(err)
  }
  const customCss = fs.readFileSync(customCssPath, "utf8")
  const modifiedHtml = data.replace(
    "</head>",
    `<style>${customCss}</style></head>`,
  )

  fs.writeFile(reportPath, modifiedHtml, "utf8", (err) => {
    if (err) return console.log(err)
    console.log("Custom CSS has been applied to the Mochawesome report")
  })
})
//     // });
