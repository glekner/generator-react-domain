# generator-react-domain
 This Generator helps you create connected React components with the Domain file structure :snowflake:

 ```
 Component/
--Component.js
--component.scss
--Component.fixtures.js
--ComponentHelper.js
--ComponentActions.js
--ComponentConstants.js
--ComponentReducer.js
--ComponentSelectors.js
--index.js
```
Most files are created with prewritten templates which can be replaced with your own.

## Usage

```sh
# install yo
npm install --global yo

# install the generator
npm install --global generator-react-domain

# run it        # destination  # name
yo react-domain src/components ComponentName
```

## Options

- `--redux` - Create Redux files.

## Replacing Templates
 
*To learn how to create Templates, refer to [ejs.co](https://ejs.co/)*


1) create a `.yo-rc.json` file in your project's root folder and fill it:

```
{
  "generator-react-domain": {
    "templatesPath": "path to your templates folder"
  }
}
```
2. Put supported files in your templates folder

| File  | Description | Has Template
| ------------- | ------------- | ------------- |
| component.js |  Component  |  :white_check_mark:
| fixtures.js  | Fixtures/Mocks  | 
| helper.js | Helper methods  |  
| scss.js  | SCSS File | 
| actions.js | Redux Actions  |  :white_check_mark:
| reducer.js  | Redux Reducer  |  :white_check_mark:
| selectors.js  | Redux Selectors  |  :white_check_mark:
| constants.js  | Constants  |  :white_check_mark:
| index.js  | Index file  |  :white_check_mark:

All Templates receive the following props
```sh
  <%= name %>       # Pascal case name
  <%= name_upper %> # Capitalized name
  <%= name_lower %> # Camel case name
```
## License

MIT &copy; [Gilad Lekner](https://github.com/glekner)
