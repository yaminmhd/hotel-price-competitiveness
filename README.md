# Hotel Price Competitiveness

Task - https://gist.github.com/mal90/4627e6beb44ec038b90f64ea1bb30638

## Tech stack

- react
- typescript
- vite
- react-query
- tailwindcss

## Installation

```shell
npm install
```

## Running the application

```shell
npm run dev

```

## Test

```shell
# unit tests
npm run test

# unit test in watch mode
npm run test:watch

# unit test with coverage
npm run test:cov
```

---

## Dev Task List

- [ ] Setup initial repo
  - [x] update readme documentation
  - [ ] install dependencies
    - [ ] testing libraries vitest, react-testing-library
    - [ ] server state data fetching library react-query
    - [ ] styling tailwindcss
- [ ] Setup react query and tailwindcss
- [ ] Create API service
  - [ ] fetching hotels
  - [ ] fetching prices
  - [ ] read base url info from environment
- [ ] Render data onto screen
  - [ ] HotelList
  - [ ] HotelDetails
- [ ] Styling cleanup
- [ ] Error handling

---

# Default documentation from Vite setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
