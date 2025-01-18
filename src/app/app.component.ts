import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean>;
  sidebarSubscription = false;

  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        map((result) => result.matches),
        shareReplay()
      );

    this.isHandset$.subscribe((isHandset) => {
      this.sidebarSubscription = isHandset;
    });
  }

  ngOnInit(): void {
    // this.isHandset$.subscribe((isHandset) => {
    //   this.sidebarSubscription = isHandset;
    // });
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
  }


}
