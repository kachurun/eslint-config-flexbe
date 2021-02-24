# @flexbe/eslint-config

This package provides flexbe JS .eslintrc as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### @flexbe/eslint-config

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

Install process:

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm install "@flexbe/eslint-config"
  ```

2. Add `"extends": "@flexbe/eslint-config"` to your .eslintrc.js file

3. Install `eslint` for your Text Editor
