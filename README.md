# ExcelAngular

The project is a template file to create a Microsoft office.js taskpane addin, for microsoft excel. This template loads the default Angular project that's created using angular cli, ng new. 

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

Run `npm start` for a dev server. This should launch microsoft excel and a node.js dev server. The instance of excel should have loaded the taskpane addin.

## Setup

This project was created by simply doing the following:

1. Created a new angular default project using angular cli 'ng new'
2. Create a seperate example taskpane add in project using Microsoft's recommended 'yo generator' :
`https://docs.microsoft.com/en-us/office/dev/add-ins/quickstarts/excel-quickstart-jquery?tabs=yeomangenerator`

`npm install -g yo generator-office`
`yo office`

3. From the taskpane project, copy the office dependencies into the project.json file of the angular project.
4. From the taskpane project, also copy across the created 'src/taskpane' and 'src/commands' folders.
5. From the taskpane project, copy across the manifest.xml file, and the webpack.config.js file, and the .vscode folder.
6. In the angular project, go to the root/index.html and the taskpane.html file and include reference to the office.js cdn in the header tag:
    `  <script type="text/javascript" src="https://appsforoffice.microsoft.com/lib/1.1/hosted/office.js"></script>`

7. In the angualr project, in the main.ts and taskpane.ts files, initialize the office.js addin using:

`
Office.initialize = () => {
  // document.getElementById("sideload-msg").style.display = "none";

  // Bootstrap the app
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((error) => console.error(error));
};
`




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
