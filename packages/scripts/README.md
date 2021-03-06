# Scripts Package

Usage of this package is normally: `tablecheck-scripts <script name>`. See sub-packages for script details.

## Setup Requirements

For these scripts to work the following structure should be adhered to. It is recommended that you run `npx @tablecheck/scripts init` to get the correct structure of your project.

```markup
- project
- | - src (react and javascript files go here)
- | - public (static files like index.html and favicons should go here
- | - config (usage of node-config and special scripts - see `config/config.js`)
- | - | - default.json
```

### Config setup

We use a combination of [node-config](https://github.com/lorenwest/node-config) and [preprocesser](https://www.npmjs.com/package/preprocess) based values.
This config is exposed via a global CONFIG variable, the types are automaticaly inferred from the `config/default.json` file when any of the following scripts are run; `tsc` `lint` `init` `precommit` `build`.

## Settings

Additional settings can be provided inside of your package.json file or inside a rc file as described by [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) (`.@tablecheckrc.json` for example). All paths are relative to the root of your project.
This file can be overwritten by providing the `--scriptConfig=<filepath>` option, but usually shouldn't be necessary.

```json static
{
  "@tablecheck": {
    "setupTests": "./root/relative/path/to/test/setup/file.js",
    "testRoots": ["packages/Button/src/tests", "packages/Layer/src"]
  }
}
```

- **setupTests:** This file is how you can load a custom version of `setupTests.js` for Jest, by default we have enzyme, react-16 and emotion snapshot testing configured.

- **testRoots: _(Not Recommended)_** Usually this won't be needed as the test script will automatically detect src folder test files. This is relevant for monorepo's like this one where running `lerna run test` gives a rather slow and garbled output. Using this array of relative folder paths you can tell jest where to look for tests under.

- Currently Supported and used Polyfills are:

  - https://www.promisejs.org/ Promise polyfill, supports `.finally`
  - `object-assign` supporting `Object.assign`

  Unlike `create-react-app` we do not polyfill the usage of `whatwg-fetch` as in our setup we use `axios`.
