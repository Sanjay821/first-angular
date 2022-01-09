import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName?: string;
  password?:string;
  error?: string;
  constructor(private Router:Router) { 

  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    if(this.userName === "Sanjay" && this.password === "sanjay") {
      this.Router.navigateByUrl("employee");
    }
    else {
      this.error="Invalid username are password";
      this.Router.navigateByUrl("");
    }
  }
}
