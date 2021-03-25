import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowCompanyComponent } from './show-company/show-company.component';

const routes: Routes = [
  {path: '',component: AppComponent},
  {path:'Dashboard', component:DashboardComponent},
  {path: 'CompanyList', component: ShowCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
