import { EmployeeServiceService } from './../../service/employee-service.service';
import { Employee } from './../../model/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor( private service : EmployeeServiceService) { 
    this.employees = [];
  }

  ngOnInit(): void {
    this.employees = this.service.onGet();
  }

}
