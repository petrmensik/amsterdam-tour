# AmsterdamTour

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Requirements
- Node.js >= 10.13.0

## Development setup
- `npm i`
  - install dependences
- `npm start`
  - start local http server and serve application on `http://localhost:4200/`

## Build
- `npm run build` | `npm run build:prod`
  - build the project to `/dist/amsterdam-tour/`
- `npm start`
  - start local http server and serve application on `http://localhost:4200/`

## Unit tests
- `npm run test` | `npm run test:watch`
  - executes unit tests of application
  - `:watch` will keep tests running and check for file changes
  - coverage is generated to `/coverage/amsterdam-tour/index.html`

## Lint
- `npm run lint:ts`
  - Typescript linting (`.tslint.json`)
- `npm run lint:html`
  - Html linting (`.htmllintrc`)
- `npm run lint:scss`
  - Style linting (`.stylelintrc`)
- `npm run lint`
  - All of above, not stopping on error

## Additional scripts
- `npm run extract`
  - find and sort all i18n keys to `/src/assets/i18n/en.json`
- `npm run analyze`
  - analyze and provide report of application bundle sizes

## Deploy check
- `npm run deploy`
  - verify if application is passing all lint rules and tests and produce production build
