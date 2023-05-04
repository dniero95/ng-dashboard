import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'dashboard',
    children: [
      {
        path: '',
        redirectTo: 'first',
        pathMatch:'full'
      },
      {
        path: 'first',
        component: FirstComponent
      },
      {
        path: 'second',
        component: SecondComponent
      },
      {
        path: 'third',
        component: ThirdComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'register',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
