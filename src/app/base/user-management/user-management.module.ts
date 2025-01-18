import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ManageUsersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
