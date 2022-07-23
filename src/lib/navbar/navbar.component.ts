import {AfterViewInit, Component, Input} from '@angular/core';
import {MenuRoute, NavColors, RoutesPosition, TitlePosition} from "../models/MenuRoute";

@Component({
  selector: 'jc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  @Input() homeIcon: string = 'fa-solid fa-igloo';
  @Input() title: string = 'JNavBar';
  @Input() titlePosition: TitlePosition = 'left';
  @Input() homeRoute: string = '/';

  @Input() menuRoutes: MenuRoute[] = [];
  @Input() routesPosition: RoutesPosition = 'right';

  @Input() navColor: NavColors = 'dark';

  routes: any;

  _collapsed: boolean = true;

  get collapsed(): boolean {
    return this._collapsed;
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    this.routes = document.getElementById('routes');
    window.addEventListener('resize', this.showRoutes);
    // this.showRoutes();
  }

  toggle() {
    this._collapsed = !this._collapsed;
    this.showRoutes();
  }

  showRoutes() {
    if (window.screen.availWidth < 500) {
      if (this.collapsed !== undefined) {
        if (!this._collapsed) {
          this.routes.style.display = 'block';
        } else {
          this.routes.style.display = 'none';
        }
      }
    } else {
      this._collapsed = true;
      this.routes.style.display = '';
    }
  }
}
