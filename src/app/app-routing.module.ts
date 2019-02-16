import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { ReportComponent } from './public/report/report.component';
import { UserComponent } from './public/user/user.component';
import { HomeComponent } from './public/home/home.component';
import { ContainerComponent } from './public/container/container.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'home',
    component: HomeComponent
  },  
  {
    path:'user',
    component: UserComponent
  },  
  {
    path:'report',
    component: ReportComponent
  },  
  {
    path:'container',
    component: ContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
