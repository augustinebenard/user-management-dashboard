import { Component } from '@angular/core';
import { UserService } from '../user-management/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  totalUsers = 0;
  customerCount = 0;
  adminCount = 0;
  staffCount = 0;
  managerCount = 0;
  superAdminCount = 0;

  constructor(private userService: UserService) {}

  ngOnInit() {
    const users = this.userService.getUsers();
    this.totalUsers = users.length;
    this.customerCount = users.filter(user => user.role === 'Customer').length;
    this.adminCount = users.filter(user => user.role === 'Admin').length;
    this.staffCount = users.filter(user => user.role === 'Staff').length;
    this.managerCount = users.filter(user => user.role === 'Manager').length;
    this.superAdminCount = users.filter(user => user.role === 'Super Admin').length
  }
}
