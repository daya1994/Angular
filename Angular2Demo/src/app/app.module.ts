import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmployeeComponent} from './employee/employee.component';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
