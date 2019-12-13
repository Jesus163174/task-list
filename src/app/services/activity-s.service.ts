import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ActivitySService {

    private api = "http://127.0.0.1:3333/activities/1";
    constructor(private http: HttpClient) { }

    index() {
        return this.http.get(this.api);
    }
    delete(id: any) {
        //console.log("http://127.0.0.1:3333/activities/"+id);
        return this.http.put("http://127.0.0.1:3333/activities/" + id, {});
    }
    post(request: any) {
        return this.http.post("http://127.0.0.1:3333/activities/", {
            "user_id": 1,
            "title": request.title,
            "description": request.desc,
            "fecha_hora": request.fecha_hora
        })
    }
    get(id: any) {
        return this.http.get("http://127.0.0.1:3333/activity/" + id);
    }

    edit(request: any,id:any) {
        return this.http.put("http://127.0.0.1:3333/activity/"+id, {
            "title": request.title,
            "description": request.description,
        });
    }
}
