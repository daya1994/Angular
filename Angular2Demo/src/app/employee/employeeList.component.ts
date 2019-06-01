import {Component, OnInit} from '@angular/core';
import {IEmployee} from './employee';
@Component ({
     selector: 'list-employee',
     templateUrl: 'employeeList.component.html',
      styleUrls : ['employeeList.component.css']
})
export class EmployeeListComponent {
    employees : IEmployee[];

    selectedEmployeeCountRadioButton : string = 'All';
     constructor() {
    this.employees= [
        { code : 'emp101', name: 'Tom', gender :'Male', annualSalary : 5500, dateOfBirth: '6/9/1989'},
        { code : 'emp102', name: 'Staurt', gender :'Male', annualSalary : 6500, dateOfBirth: '11/11/1988'},
        { code : 'emp103', name: 'Mike', gender :'Male', annualSalary : 9500, dateOfBirth: '12/8/1990'},
        { code : 'emp104', name: 'Mary', gender :'Female', annualSalary : 7500, dateOfBirth: '10/6/1996'},
        { code : 'emp105', name: 'Nary', gender :'Female', annualSalary : 8900, dateOfBirth: '9/6/1993'},
        { code : 'emp105', name: 'Hary', gender :'Male', annualSalary : 8900, dateOfBirth: '6/9/1992'},
      ];
  }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue : string) : void {
      this.selectedEmployeeCountRadioButton = selectedRadioButtonValue; 
    }
  // getEmployees():void {
  //     this.employees=[
  //       { code : 'emp101', name: 'Tom', gender :'Male', annualSalary : 5500, dataOfBirth: '6/9/1989'},
  //       { code : 'emp102', name: 'Staurt', gender :'Male', annualSalary : 6500, dataOfBirth: '11/11/1988'},
  //       { code : 'emp103', name: 'Mike', gender :'Male', annualSalary : 9500, dataOfBirth: '12/8/1990'},
  //       { code : 'emp104', name: 'Mary', gender :'Female', annualSalary : 7500, dataOfBirth: '10/6/1996'},
  //       { code : 'emp105', name: 'Hary', gender :'Female', annualSalary : 8900, dataOfBirth: '10/5/1994'},
  //     ];
  // }
  // trackByEmpCode(index: number, employee: any): string {
  //   return employee.code;
  // }

  getTotalEmployeesCount(): number
  {
    return this.employees.length;
  }

  getTotalMaleEmployeesCount(): number
  {
    return this.employees.filter(e=>e.gender==='Male').length;
  }

  getTotalFemaleEmployeesCount(): number
  {
    return this.employees.filter(e=>e.gender==='Female').length;
  }
}
