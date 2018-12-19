# generator-react-domain
[![Coverage Status](https://coveralls.io/repos/github/glekner/generator-react-domain/badge.svg?branch=master)](https://coveralls.io/github/glekner/generator-react-domain?branch=master)
[![Build Status](https://travis-ci.org/glekner/generator-react-domain.svg?branch=master)](https://travis-ci.org/glekner/generator-react-domain)

 This Generator helps you create connected React components with the Domain file structure :snowflake:

 ```sh
 $ tree
.
├── Component.fixtures.js
├── Component.js
├── ComponentActions.js
├── ComponentConstants.js
├── ComponentHelper.js
├── ComponentReducer.js
├── ComponentSelectors.js
├── __tests__
│   ├── Component.test.js
│   ├── ComponentActions.test.js
│   ├── ComponentIntegration.test.js
│   ├── ComponentReducer.test.js
│   └── ComponentSelectors.test.js
├── component.scss
└── index.js
```

## Usage

```sh
# install
npm install --global yo generator-react-domain

# run it        # destination  # name
yo react-domain src/components ComponentName
```

## Options

- `--redux` - Create Redux files.

## Tests
This generator is using an external package called [react-redux-test-utils](https://github.com/sharvit/react-redux-test-utils) to create light and readable test templates for your components. The package uses `enzyme` at its core.

## Config

create a `.yo-rc.json` file in your project's root folder and fill it:

```sh
{
  "generator-react-domain": {
    "templatesPath": "path to your templates folder",
    "componentsPath": "path to your components folder",
    "redux": true # create redux files
  }
}
```

## Replacing Templates
 
*To learn how to create Templates, refer to [ejs.co](https://ejs.co/)*


1) fill your `.yo-rc.json` file in your project's root folder with `templatesPath` as seen above.

2. Put supported files in your templates folder

| File  | Description | Has Template
| ------------- | ------------- | ------------- |
| component.js |  Component  |  :white_check_mark:
| component_test.js |  Component Test  |  :white_check_mark:
| actions.js | Redux Actions  |  :white_check_mark:
| actions_test.js |  Actions Test  |  :white_check_mark:
| reducer.js  | Redux Reducer  |  :white_check_mark:
| reducer_test.js |  Reducer Test  |  :white_check_mark:
| selectors.js  | Redux Selectors  |  :white_check_mark:
| selectors_test.js |  Selectors Test  |  :white_check_mark:
| index.js  | Index file  |  :white_check_mark:
| integration_test.js  | Redux Flow Test  |  :white_check_mark:
| constants.js  | Constants  |  :white_check_mark:
| helper.js | Helper methods  |   
| scss.js  | SCSS File |
| fixtures.js  | Fixtures/Mocks  | 


All Templates receive the following props
```sh
  <%= name %>       # Pascal case name
  <%= name_upper %> # Capitalized name
  <%= name_lower %> # Camel case name
```
## License

[MIT](https://github.com/glekner/generator-react-domain/blob/master/LICENSE)
