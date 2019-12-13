import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'Tasks General';
  user:any  = [];
  
  constructor(private router:Router){
    
  }
  ngOnInit(){
   
  }
  logout(){
    localStorage.setItem('user','');
    this.router.navigate(['/login']);

  }
}
