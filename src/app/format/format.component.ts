import { Component, OnInit } from '@angular/core';

Office.onReady(() => {
  // If needed, Office.js is ready to be called
});

const template = require('./format.component.html')

@Component({
  selector: 'app-format',
  template
})
export class FormatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
