import { Component, OnInit } from '@angular/core';
import { ActivitySService } from 'src/app/services/activity-s.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  public ac:any =[];
  constructor(private acS:ActivitySService) { }

  ngOnInit() {
    this.getAllActivities();
  }

  getAllActivities(){
    this.acS.index().subscribe((res:any)=>{
      this.ac = res.activities;
      console.log(this.ac)
    },(error)=>{
      alert(error.message);
    });
  }

  onDelete(id){
    this.acS.delete(id).subscribe(res=>{
      this.getAllActivities();
    },error=>{
      console.log(error);
    })
  }

}
