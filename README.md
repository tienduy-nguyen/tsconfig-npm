# Scaffold quickly tsconfig.json

When I search on Youtube how to create & publish an npm package. 
I found an awesome tutorial of [Ben Award](https://www.youtube.com/watch?v=Ufwbp838yZA) - create `tsconfig.json` package. Thanks Ben!.

So I try it immediately and make my custom `tsconfig.json`.

## Usage

Npm package name: `td-tsconfig`:

- Install package in dev-dependencies
  ```bash
  $ yarn add -D td-tsconfig
  # or with npm
  $ npm i --save-dev td-tsconfig
  ```
- Command:
  ```bash
  $ yarn td-tsconfig
  # or with npx
  $ npx td-tsconfig
  ```
- And pick your framework you need
  There are 4 frameworks:
  - **node**
  - **react**
  - **nextjs**
  - **vitejs-react**
  - cypress (tsconfig extends)
- After running commands above, an `tsconfig.json` file will be created directly on your root folder.
- So all the things are done, now  may be you don't need keep package `td-tsconfig` in your project any more, and you and remove it.
  ```bash
  $ yarn remove td-tsconfig
  # or 
  $ npm uninstall td-tsconfig
  ```
- **Hint**: maybe you can install globally this package and then you can use for all your projects.
  
  ```bash
  $ yarn global add td-tsconfig
  # or
  $ npm i -g td-tsconfig
  ```

  DONE!
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


  // to avoid clashing with Jest types
  ```json
  {
    "extends": "../tsconfig.json",
    "compilerOptions": {
      "noEmit": true,
      "types": ["cypress"]
    },
    "include": ["../node_modules/cypress", "./*/*.ts"]
  }


  ```


## Project references:
See more my implementation `tsconfig.json` in some projects:

- NestJS-React-ViteJS: [Bookstore](https://github.com/tienduy-nguyen/bookstore)
- NodeJS-NextJS: [Reddit-GraphQL](https://gitlab.com/tienduy-nguyen/reddit-graphql)
- Only NestJS: [NestJS-Prisma-GraphQL](https://github.com/tienduy-nguyen/nestjs-graphql-prisma)
- Only React: [React-TypeScript-Antd](https://github.com/tienduy-nguyen/react-typescript-example)