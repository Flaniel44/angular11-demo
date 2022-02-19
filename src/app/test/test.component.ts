import { Component, OnInit } from '@angular/core';

//class immidiately below this decorator is the component (attaches metadata to the class)
@Component({
  selector: 'app-test', //instantiate this component anytime <app-test> appears
  templateUrl: './test.component.html', //how to render component
  styleUrls: ['./test.component.less'] //how to style component
})

//controller codde in here
//Class and view intereact via API
//TypeScript: Strongly typed Javascript
//Angular application is defined by a set of NgModules
export class TestComponent implements OnInit { 

  constructor() { }

  ngOnInit(): void {
  }

}
