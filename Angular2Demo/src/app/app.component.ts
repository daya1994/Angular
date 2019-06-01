import {Component} from '@angular/core';
import { SimpleComponent } from './Others/simple.component';

@Component(
  {
    selector : 'app-root',
    template : '<list-employee></list-employee>'
    /* This for demo of 
    template : `Your Text : <input type='text' [(ngModel)]='userText'/> 
                <br/> <br/>
                <simple [simpleInput]='userText'></simple>
                `*/
    //template : '<list-employee></list-employee>'

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
  userText : string ='Pragim';
  
  //name: string = 'Tom';
  // onClick(){
  //   console.log('Button Clicked');
  // }
  /*pageHeader = 'Employee Details';
  imagePath = 'http://www.pragimtech.com/Images/Logo.JPG';*/
}
