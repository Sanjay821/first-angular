import { LoginComponent } from './page/login/login.component';
import { UpdateEmployeeComponent } from './page/update-employee/update-employee.component';
import { AddEmployeeComponent } from './page/add-employee/add-employee.component';
import { EmployeeComponent } from './page/employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "employee", component: EmployeeComponent},
  {path:"employee/add", component: AddEmployeeComponent},
  {path:"employee/edit", component: UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
