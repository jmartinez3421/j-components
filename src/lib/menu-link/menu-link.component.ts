import {Component, Input, OnInit} from '@angular/core';
import {MenuRoute} from "../models/MenuRoute";

@Component({
  selector: 'jc-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.scss']
})
export class MenuLinkComponent implements OnInit {

  @Input() routes!: MenuRoute[];
  @Input() isChild: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
