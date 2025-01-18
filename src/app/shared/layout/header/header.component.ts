import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  sidebarStatus = false;
  screenStatus = false;
  @Input() sidenav!: MatSidenav;
  @Input() isHandset$!: Observable<boolean>;
  constructor( ) {}

  ngOnInit(): void {
  }


  toggleRightSidenav() {
    this.sidenav.toggle();
  }


}
