import { Component } from '@angular/core';
import { Router } from '@angular/router';
type SidebarType = {
  to: string;
  label: string;
};
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isGray: boolean = false;
  sidebarItems: SidebarType[] = [];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.displaySidebar();
  }

  displaySidebar() {
    this.sidebarItems = [
      {
        to: 'dashboard',
        label: 'Dashboard',
      },
      {
        to: 'users/manage-users',
        label: 'User Management',
      },

    ];
  }

  routeTo(route: string) {
    this.router.navigateByUrl(route);
  }

  isRouteActive(route: string) {
    return this.router.isActive(route, false);
  }

}
