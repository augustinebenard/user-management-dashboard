import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./base/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./base/user-management/user-management.module').then(m => m.UserManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
