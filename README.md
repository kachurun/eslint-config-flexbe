# eslint-config-flexbe

This package provides flexbe JS .eslintrc as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-flexbe

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

Install process:

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm install "eslint-config-flexbe@latest"
  ```

2. Add `"extends": "flexbe"` to your .eslintrc.* file

3. Install `linter` `linter-eslint` `linter-ui` packages in your Text Editor
