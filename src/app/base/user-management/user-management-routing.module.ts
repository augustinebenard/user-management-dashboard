import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
  {path:'manage-users', component: ManageUsersComponent},
  {path:'', redirectTo:'manage-users', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class UserManagementRoutingModule { }
