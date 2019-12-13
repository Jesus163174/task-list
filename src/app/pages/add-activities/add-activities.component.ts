import { Component, OnInit } from '@angular/core';
import { ActivitySService } from 'src/app/services/activity-s.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-activities',
    templateUrl: './add-activities.component.html',
    styleUrls: ['./add-activities.component.scss']
})
export class AddActivitiesComponent implements OnInit {
    public form: any = {};
    constructor(private acS: ActivitySService, private router: Router) { }

    ngOnInit() {
    }

    onCreate() {
        this.form.user_id = 1;
        this.acS.post(this.form).subscribe((res) => {
            this.router.navigate(['/activities']);
        });
    }

}
