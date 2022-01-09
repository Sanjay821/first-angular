import { Router } from '@angular/router';
import { EmployeeServiceService } from './../../service/employee-service.service';
import { Employee } from './../../model/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {


  id?: number;
  salary?: number;

  constructor(private service: EmployeeServiceService,
    private Router: Router) { 

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.salary);
    console.log(this.id);
    this.service.onUpdate(this.id, this.salary);
    this.Router.navigateByUrl("employee");
  }
}
