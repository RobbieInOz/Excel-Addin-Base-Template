# ExcelAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Generating new component templates:

In the component .ts file, YOU MUST include the office ready function IMMEDIATELY after you do your imports

`Office.onReady(() => {  // If needed, Office.js is ready to be called });`

You can't 'import' the html template file in the @Component decorator. Instead (thanks to something up with webpack that I don't understand),  you need to 'require it' first. For some reason webpack is making it load as the 'wrong' type of module? I don't know. Just do this instead:

`const template = require('./format.component.html')

@Component({
  selector: 'app-format',
  template
})`

## Imports in general...

Elsewhere in the files, if you're importing a file from within the app, you need to give the relative reference down to the root folder. I.e:


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
