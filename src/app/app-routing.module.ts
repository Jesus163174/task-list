import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { AddActivitiesComponent } from './pages/add-activities/add-activities.component';
import { ToDoComponent } from './pages/activities/to-do/to-do.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'activities',
    component:ActivitiesComponent
  },
  {
    path:'activities/add',
    component:AddActivitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
