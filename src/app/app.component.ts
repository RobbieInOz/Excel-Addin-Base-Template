import { Component } from '@angular/core';

const template = require("./app.component.html"); //Need to use 'require' since this uses webpack?? TODO: Investigate!

@Component({
  selector: 'app-home', //Defines the html tags to attach this html template
  template, //the html template to attach
})
export class AppComponent {
  title = 'excelAngular';
  message = 'did I load?'
}
