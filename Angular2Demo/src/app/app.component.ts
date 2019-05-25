import {Component} from '@angular/core';

@Component(
  {
    selector : 'app-root',
    template : '<list-employee></list-employee>'

    /*template: 'Name : <input [(ngModel)]= "name" />'+
      '<br/> ' +
      'You Entered: {{name}} ' */
    /*template : `<my-employee></my-employee>`*/
    /*template : `<button (click)='onClick()'> Click Me </button>`*/
    /*template : '<div> ' +
      '<h1>{{pageHeader}}  </h1> ' +
      '<img src="imagePath"/>' +
      '<my-employee></my-employee> ' +
      '</div> '*/
  })

export class AppComponent {
  name: string = 'Tom';
  // onClick(){
  //   console.log('Button Clicked');
  // }
  /*pageHeader = 'Employee Details';
  imagePath = 'http://www.pragimtech.com/Images/Logo.JPG';*/
}
