import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  index(id:any){
    return this.http.get("http://localhost:3333/todo/"+id);
  }
}
