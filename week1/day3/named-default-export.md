# Named Export vs Default Export in ES6

ES6 provides us to import a module and use it in other files. Strictly speaking in React terms, one can use stateless components in other components by exporting the components from their respective modules and using it in other files.


ES6 provides two ways to export a module from a file: named export and default export.

## Named Export: (export)

With named exports, one can have multiple named exports per file. Then import the specific exports they want surrounded in braces. The name of imported module has to be the same as the name of the exported module.

```js
// imports
// ex. importing a single named export
import { MyComponent } from "./MyComponent";


// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";


// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";


// exports from ./MyComponent.js file
export const MyComponent = () => {}
export const MyComponent2 = () => {}
```

Import all the named exports onto an object:

```js
import * as MainComponents from "./MyComponent";
// use MainComponents.MyComponent and MainComponents.MyComponent2
here
```

## Default Export: (export default)

One can have only one default export per file. When we import we have to specify a name and import like:

```js
// import
import MyDefaultComponent from "./MyDefaultExport";


// export
const MyComponent = () => {}
export default MyComponent;
```

The naming of import is completely independent in default export and we can use any name we like.

From [Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

`Named exports are useful to export several values. During the import, one will be able to use the same name to refer to the corresponding value.`

`Concerning the default export, there is only a single default export per module. A default export can be a function, a class, an object or anything else. This value is to be considered as the “main” exported value since it will be the simplest to import.`


[Source](https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910#:~:text=ES6%20provides%20two%20ways%20to,named%20export%20and%20default%20export.&text=With%20named%20exports%2C%20one%20can,name%20of%20the%20exported%20module.)