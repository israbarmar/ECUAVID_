import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})

export class CuentaComponent implements OnInit, OnDestroy {
  // Search the tags in the DOM
  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
  htmlTag: HTMLElement = document.getElementsByTagName('html')[0];

  constructor() { }

  ngOnInit() {
    // add the css-style to the html and body tags
    this.bodyTag.classList.add('cuenta-page');
    this.htmlTag.classList.add('cuenta-page');
  }

  ngOnDestroy() {
    // remove the the body classes
    this.bodyTag.classList.remove('cuenta-page');
    this.htmlTag.classList.remove('cuenta-page');
  }

  }
