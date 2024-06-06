# eslint-plugin-p5js

ESLint plugin that defines p5.js globals.

## Installation

First, you need to install ESLint:

```bash
npm install eslint --save-dev
```

Next, install `@chaitanyathakur/eslint-plugin-p5js`:

```bash
npm install @chaitanyathakur/eslint-plugin-p5js --save-dev`
```

## Usage

Create an `eslint.config.js` file in your project root. Add the following:

```JavaScript
import globals from "globals";
import pluginJs from "@eslint/js";
import { p5globals, implicit } from "@chaitanyathakur/eslint-plugin-p5js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...p5globals,
      },
      sourceType: "script",
    },
    rules: {
      "no-unused-vars": ["warn", { varsIgnorePattern: implicit }],
    },
  },
  pluginJs.configs.recommended,
];
```

To lint your p5.js files, run the following command:

```bash
npx eslint your-file.js
```

Or lint your entire project:

```bash
npx eslint .
```
