import globals from "globals"
import pluginJs from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import cypressPlugin from "eslint-plugin-cypress"
export default [
  { languageOptions: { globals: {
    ...globals.browser,
    ...globals.chai,
    ...globals.mocha,
    ...globals.node,
    require: "readonly",
    Cypress: "readonly",
    cy: "readonly",
  } } },
  pluginJs.configs.recommended,
  {
    ignores: [
      "node_modules/",
      "reports/",
      "cypress/reports/",
    ],
  },

  {
    languageOptions: {
      globals: {
        ...globals.chai,
        ...globals.mocha, // Include Cypress globals for these files
      },
    },
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    ...stylistic.configs["recommended-flat"],
    ...stylistic.configs.customize({
      quotes: "double",
    }),
  },
  {
    plugins: {
      cypress: cypressPlugin,
    },

    rules: {
      "cypress/no-assigning-return-values": "error",
      "cypress/no-unnecessary-waiting": "error",
      "cypress/assertion-before-screenshot": "warn",
      "cypress/no-force": "warn",
      "cypress/no-async-tests": "error",
      "cypress/no-async-before": "error",
      "cypress/no-pause": "error",
    },

  },
]
