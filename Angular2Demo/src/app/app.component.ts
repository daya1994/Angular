import {Component} from '@angular/core';

@Component(
  {
    selector : 'app-root',
    template : '<list-employee></list-employee>'

    
  })

export class AppComponent {
  name: string = 'Tom';
  // onClick(){
  //   console.log('Button Clicked');
  // }
  /*pageHeader = 'Employee Details';
  imagePath = 'http://www.pragimtech.com/Images/Logo.JPG';*/
}
