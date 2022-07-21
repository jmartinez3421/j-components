import {Component, Input, OnInit} from '@angular/core';
import {MenuRoute, RoutesPosition, TitlePosition} from "../models/MenuRoute";

@Component({
  selector: 'jc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() homeIcon: string = 'fa-solid fa-igloo';
  @Input() title: string = 'JNavBar';
  @Input() titlePosition: TitlePosition = 'left';
  @Input() homeRoute: string = '/';

  @Input() menuRoutes: MenuRoute[] = [];
  @Input() routesPosition: RoutesPosition = 'right';

  // @Input() search: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
