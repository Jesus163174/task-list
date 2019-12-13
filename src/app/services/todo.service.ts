import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 

  constructor(private http:HttpClient) { }

  index(id:any){
    return this.http.get("https://final-soa.herokuapp.com/"+id);
  }

  post(activity_id:any,request:any) {
    return this.http.post("https://final-soa.herokuapp.com/todo/"+activity_id,{
      'title':request.title,
      'activity_id':activity_id
    });
  }
}
