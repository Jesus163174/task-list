import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login:any = {};
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit() {
    
  }

  onLogin(){
    this.http.post("https://final-soa.herokuapp.com/login",{
      email:this.login.email,
      password:this.login.password
    }).subscribe((res:any)=>{
      let user = JSON.stringify(res.user);
      localStorage.setItem('user',user);
      this.router.navigate(['activities']);
    },(error)=>{
      alert(error.message);
    });
  }

}
