import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { AddActivitiesComponent } from './pages/add-activities/add-activities.component';
import { ToDoComponent } from './pages/activities/to-do/to-do.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ActivityEditComponent } from './pages/activities/activity-edit/activity-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActivitiesComponent,
    AddActivitiesComponent,
    ToDoComponent,
    ActivityEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
