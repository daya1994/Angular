import {Component} from '@angular/core';
@Component ({
     selector: 'list-employee',
     templateUrl: 'employeeList.component.html',
      styleUrls : ['employeeList.component.css']
})
export class EmployeeListComponent {
    employees : any[];
     constructor() {
    this.employees= [
        { code : 'emp101', name: 'Tom', gender :'Male', annualSalary : 5500, dataOfBirth: '25/6/1989'},
        { code : 'emp102', name: 'Staurt', gender :'Male', annualSalary : 6500, dataOfBirth: '11/7/1988'},
        { code : 'emp103', name: 'Mike', gender :'Male', annualSalary : 9500, dataOfBirth: '29/5/1990'},
        { code : 'emp104', name: 'Mary', gender :'Female', annualSalary : 7500, dataOfBirth: '19/9/1996'},
    ];
  }
  getEmployees():void {
      this.employees=[
        { code : 'emp101', name: 'Tom', gender :'Male', annualSalary : 5500, dataOfBirth: '25/6/1989'},
        { code : 'emp102', name: 'Staurt', gender :'Male', annualSalary : 6500, dataOfBirth: '11/7/1988'},
        { code : 'emp103', name: 'Mike', gender :'Male', annualSalary : 9500, dataOfBirth: '29/5/1990'},
        { code : 'emp104', name: 'Mary', gender :'Female', annualSalary : 7500, dataOfBirth: '19/9/1996'},
        { code : 'emp105', name: 'Hary', gender :'Female', annualSalary : 8900, dataOfBirth: '17/5/1994'},
      ];
  }
  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  }
}
