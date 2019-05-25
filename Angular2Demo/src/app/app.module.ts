import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmployeeComponent} from './employee/employee.component';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { EmployeeListComponent } from './employee/employeeList.component';

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, EmployeeListComponent],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
