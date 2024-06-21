# Hotel Price Competitiveness

Task - https://gist.github.com/mal90/4627e6beb44ec038b90f64ea1bb30638

## 🎉 Tech stack

- **React** - A JavaScript library for building user interfaces.
- **Vite** - A fast, opinionated frontend build tool.
- **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript.
- **@tanstack/query** - Async data fetching and state manager
- **Tailwind CSS** - A utility-first CSS framework.
- **ESLint** - A pluggable linting utility for TypeScript.
- **PostCSS** - A tool for transforming CSS with JavaScript.
- **Autoprefixer** - A PostCSS plugin to parse CSS and add vendor prefixes.
- **shadcn/ui** - Beautifully designed components that you can copy and paste into your apps.
- **msw** - Networking request mocking tool

## 📂 Project Structure

The project structure follows a standard React application layout:

```python
hotel-price-competitiveness/
  ├── node_modules/      # Project dependencies
  ├── public/            # Public assets
  ├── src/               # Application source code
  │   ├── components/    # React components
  │   │   └── ui/        # shadcn/ui components
  │   ├── features/      # features and related subfolders - HotelPricing
  │   │   └── components/
  │   │   └── constants/
  │   │   └── hooks/
  │   │   └── lib/
  │   │   └── pages/
  │   ├── lib/           # Utility functions
  │   ├── mocks/         # MSW server and handler setup
  │   ├── App.tsx        # Application entry point
  │   ├── index.css      # CSS stylesheets
  │   ├── App.css        # CSS stylesheets
  │   └── main.tsx       # Main rendering file
  ├── .env               # Environment file
  ├── .eslintrc.cjs      # ESLint configuration
  ├── components.json    # Shadcn component configuration
  ├── index.html         # HTML entry point
  ├── postcss.config.js  # PostCSS configuration
  ├── tailwind.config.js # Tailwind CSS configuration
  ├── tsconfig.json      # TypeScript configuration
  └── vite.config.ts     # Vite configuration
  └── vite-setup.ts      # Vite test setup
```

## 🚀 Getting Started

### Installation

```shell
npm install
```

### Running the application

```shell
npm run dev
```

### Test

```shell
# unit tests
npm run test

# unit test in watch mode
npm run test:watch

# unit test with coverage
npm run test:cov
```

## 📜 Dev Task List

- [x] Setup initial repo
  - [x] update readme documentation
  - [x] install dependencies
    - [x] vitest, react-testing-library
    - [x] axios, react-query
    - [x] tailwindcss
- [x] Setup vitest
- [x] Setup react query and tailwindcss
- [x] Render data onto screen
  - [x] HotelPricingPage
  - [x] HotelCard
- [x] Create API service
  - [x] define types for data contract
  - [x] fetching hotels
  - [x] fetching prices
  - [x] read base url info from environment
- [x] Render currencies onto screen
- [x] Network mocking with msw
- [x] Implement currency switching functionality
  - [x] add localstorage for currency refresh
  - [x] round off currencies for display
  - [x] push "Rates unavailable" result to bottom of list
- [x] Implement competitor pricing functionality
  - [x] competitive pricing listing
  - [x] display savings
- [x] Implement taxes & fees functionality
- [x] Enhance error handling
- [ ] Setup test coverage
- [ ] refactor to uselocalstorage hook
- [ ] refactor enum for currency
