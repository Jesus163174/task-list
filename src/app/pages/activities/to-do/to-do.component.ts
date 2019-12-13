import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ActivitySService } from 'src/app/services/activity-s.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  public todo = {}
  public activity_id;
  public activity = [];
  public listAc = [];
  constructor(private router:Router,private activR: ActivatedRoute, private acS: ActivitySService, private list:TodoService) { }

  ngOnInit() {
    this.activity_id = this.activR.snapshot.params.id;
    this.getActivity();
    this.getList();
  }

  getActivity(){
    this.acS.get(this.activity_id).subscribe((res:any)=>{
      this.activity = res;
    },(error)=>{
      alert(error.message);
    });
  }

  getList(){
    this.list.index(this.activity_id).subscribe((res:any)=>{
      this.listAc = res;
    });
  }

  onCreate(){
    this.list.post(this.activity_id,this.todo).subscribe((res:any)=>{
      this.getList();
    },error=>{
      alert(error.message);
    });
  }

}
