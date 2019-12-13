import { Component, OnInit } from '@angular/core';
import { ActivitySService } from 'src/app/services/activity-s.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss']
})
export class ActivityEditComponent implements OnInit {
  public form: any = {};
  public ac:any = [];
  public id_activity = [];
  constructor(private acS:ActivitySService,private router:Router, private act:ActivatedRoute) { }

  ngOnInit() {
    this.id_activity = this.act.snapshot.params.id;
    this.getActivity();
  }
  getActivity(){
    this.acS.get(this.id_activity).subscribe((res:any)=>{
      this.ac = res;
    },error => {
      console.log(error.message)
    });
  }

  onEdit(){
    
    this.acS.edit(this.ac,this.id_activity).subscribe((res)=>{
      this.router.navigate(['/activities']);
    });
  }

}
