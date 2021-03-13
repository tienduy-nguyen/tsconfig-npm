# Scaffold quickly tsconfig.json

When I search on Youtube how to create & publish an npm package. 
I found an awesome tutorial of [Ben Award](https://www.youtube.com/watch?v=Ufwbp838yZA) - create `tsconfig.json` package.

So I try it and make my custom `tsconfig.json`.

## Usage

Npm package name: `td-tsconfig`:

- Install package
  ```bash
  $ yarn add td-tsconfig
  # or with npm
  $ npm i td-tsconfig
  ```
- Command:
  ```bash
  $ yarn td-tsconfig
  # or with npx
  $ npx td-tsconfig
  ```
- And pick your framework you need
  There are 4 frameworks:
  - node
  - react
  - nextjs
  - vitejs-react

## Some notices

- **Note**: a notice when to use `absolute path` in ViteJS with React

eg:
```ts
import {Navbar} from 'src/components/Navbar.tsx' // --> is absolute path with baseUrl= "./"
```

To make sure it works, we need customize `alias` in `vite.config.ts` 


```ts
// vite.config.js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
});

```
To use `import { resolve } from 'path';`, you need installed package `@types/node`.

- **Note**: If we use jest & cypress for Testing in same React project, we need have two different files `tsconfig.json`: one in root dir for `src` project and another in `cypress folder` to avoid conflict **types** between 2 this packages. Check my project [Bookstore](https://github.com/tienduy-nguyen/bookstore.git) to see how config.

  Example of `tsconfig.json` for cypress in React: 
  ```json
  {
    "extends": "../tsconfig.json",
    "compilerOptions": {
      "noEmit": true,
      // be explicit about types included
      // to avoid clashing with Jest types
      "types": ["cypress"]
    },
    "include": ["../node_modules/cypress", "./*/*.ts"]
  }


  ```