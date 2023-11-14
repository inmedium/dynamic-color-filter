# dynamic-color-filter
This package can dynamically create CSS filters to manipulate colors.

## Usage

Install the package, run the following command:
```
npm i dynamic-color-filter
````
Add `dynamic-color-filter` as a loader inside your `webpack.config.js`:
```js
const config = {
    // ...
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'dynamic-color-filter', // Keep it above SASS loader
                    'sass-loader'
                ]
            },
        ],
    },
    // ...
}
```
Use the following syntax inside your (S)CSS:
```scss
element {
    width: auto; // For presentation purposes only

    color-filter-to: ([color]);

    // Other styles
    font-size: 1rem;
}
```
replace `[color]` with any valid CSS-Color like `hotpink`, `#d5d5d5` or `rgb(231, 231, 231)`. You can also use `rgba`, but the transparency will be ignored and the color will be treated as 100% opacity.

## Utilize SCSS mixins:
```SCSS
@mixin color-filter-to($color) {
    color-filter-to: ($color);
}
```