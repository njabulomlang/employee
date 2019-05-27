import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { EmployeesComponent } from './pages/employees/employees.component';
import { SearchEmployeePipe } from './search-employee.pipe';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './pages/employees/add/add.component';
import { UpdateComponent } from './pages/employees/update/update.component';
import { ViewComponent } from './pages/employees/view/view.component';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'employee',
    canActivate: [AuthguardGuard],
    component: EmployeesComponent
  },
  {
    path:"",
    component: EmployeesComponent
   } ,
   {
     path:"add",
     component: AddComponent
   },
   {
     path:"update/:id",
     component: UpdateComponent
   },
  
  {
    path:"view/:id",
    component: ViewComponent
  },
  {
    path:"**",
    component: EmployeesComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    EmployeesComponent,
    SearchEmployeePipe,
    AddComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
