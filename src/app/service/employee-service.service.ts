import { Employee } from './../model/employee.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  employees : Employee[];
   constructor() { 
     this.employees =[];
   }
 
   onGet() : Employee[]{
     return this.employees;
   }
 
   onAdd(employee: Employee) {
     this.employees.push(employee);
   }
 
   onDelete(id : number) {
     let emp = this.employees.find(x => x.id === id);
     let index = this.employees.indexOf(emp as Employee, 0);
     this.employees.splice(index, 1);
   }
 
   onGetEmployee(id: number) {
    return this.employees.find(x => x.id === id);
   }
 
   onUpdate(id?:number, salary?: number) {
    
     let oldEmployee = this.onGetEmployee(id as number) as Employee;
     console.log(oldEmployee)
     oldEmployee.salary = salary;
     oldEmployee.gender = "male";
   }
}   
