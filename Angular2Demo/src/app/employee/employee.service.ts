import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable()
export class EmployeeService {
  getEmployees() : IEmployee[] {
      return  [
        { code : 'emp101', name: 'Tom', gender :'Male', annualSalary : 5500, dateOfBirth: '6/9/1989'},
        { code : 'emp102', name: 'Staurt', gender :'Male', annualSalary : 6500, dateOfBirth: '11/11/1988'},
        { code : 'emp103', name: 'Mike', gender :'Male', annualSalary : 9500, dateOfBirth: '12/8/1990'},
        { code : 'emp104', name: 'Mary', gender :'Female', annualSalary : 7500, dateOfBirth: '10/6/1996'},
        { code : 'emp105', name: 'Nary', gender :'Female', annualSalary : 8900, dateOfBirth: '9/6/1993'},
        { code : 'emp105', name: 'Hary', gender :'Male', annualSalary : 8900, dateOfBirth: '6/9/1992'},
      ];
  }
}