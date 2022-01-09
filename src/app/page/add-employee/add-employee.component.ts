import { EmployeeServiceService } from './../../service/employee-service.service';
import { Employee } from './../../model/employee.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  gender: string[] =  ["Male", "Female"];
  id ?: any  ;
  header?: string;
  employee: Employee;

  constructor(private route: ActivatedRoute,
    private service: EmployeeServiceService,
    private router: Router) { 
    this.employee = new Employee();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.onAdd(this.employee);
    this.router.navigateByUrl("employee");
  }
}
