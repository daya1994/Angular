export interface IEmployee {
code : string;
name : string;
gender : string;
annualSalary : number;
dateOfBirth : string;
//department? : string;
//computeMonthlySalary(annualSalary:number): number;

}

//export class Employee implements IEmployee{
    // public code : string;
    // public name : string;
    // public gender : string;
    // public annualSalary : number;
    // public dateOfBirth : string;

    //constructor(public code : string, public name : string, public gender : string, public annualSalary : number, public dateOfBirth : string ) {
        //no need of writing 
        // this.code=code;

    //}
    // computeMonthlySalary(annualSalary:number): number {
    //     return annualSalary / 12;
    // } 
//}