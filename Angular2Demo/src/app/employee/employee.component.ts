import {Component} from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: 'employee.component.html',
  styleUrls: ['employee.component.css']
})
export class EmployeeComponent {
  columnSpan = 2;
  firstName = 'Tom';
  lastName = 'Moody';
  gender = 'Male';
  age = 20;
  showDetails = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
