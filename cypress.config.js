const { defineConfig } = require("cypress")
const fs = require("fs")
const { configureVisualRegression } = require("cypress-visual-regression")
const path = require("path")

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  screenshotsFolder: "cypress/reports/mochareports/assets/screenshots/actual",
  videosFolder: "cypress/reports/mochareports/assets/videos",
  video: true,
  videoCompression: true,
  embeddedScreenshots: true,
  saveAllAttempts: false,
  e2e: {
    specPattern: ["cypress/e2e/spec/**/*.js", "cypress/e2e/visual/**/*.js"],
    specFolder: "cypress/e2e/spec",
    setupNodeEvents(on) {
      configureVisualRegression(on)

      on("task", {
        logComparisonResults(data) {
          console.log("Comparison Results:", data)
          // Saving the comparison results
          const resultsPath = path.join(
            __dirname,
            "cypress/reports/comparisonResults.json",
          )
          fs.writeFileSync(resultsPath, JSON.stringify(data, null, 2))

          return null
        },
        log(message) {
          console.log(message)
          return null
        },
      })

      // on("before:browser:launch", (browser = {}, launchOptions) => {
      //   // Check if the BROWSER environment variable is set to "chrome"
      //   if (process.env.BROWSER === "chrome" && browser.family === "chromium") {
      //     // Here you can modify launchOptions, if necessary
      //   }
      //   return launchOptions;
      // });

      // return config;

      // on("after:spec", (spec, results) => {
      //   if (results && results.video) {
      //     // Do we have failures for any retry attempts?
      //     const failures = results.tests.some((test) =>
      //       test.attempts.some((attempt) => attempt.state === "failed")
      //     );
      //     // if (!failures) {
      //     //   // delete the video if the spec passed and no tests retried
      //     //   fs.unlinkSync(results.video);
      //     // }
      //   }
      // });
    },

    env: {
      visualRegressionType: "regression",
      visualRegressionBaseDirectory: "cypress/assets/snapshot/base",
      visualRegressionDiffDirectory:
        "cypress/reports/mochareports/assets/screenshots/diff",
      visualRegressionGenerateDiff: "always",
      visualRegressionFailSilently: true,
      URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    },
  },
})
