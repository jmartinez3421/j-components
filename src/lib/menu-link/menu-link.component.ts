import {Component, Input, OnInit} from '@angular/core';
import {MenuRoute, RoutesPosition} from "../models/MenuRoute";

@Component({
  selector: 'jc-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.scss']
})
export class MenuLinkComponent implements OnInit {

  @Input() routes!: MenuRoute[];
  @Input() isChild: boolean = false;
  @Input() routePosition: RoutesPosition = 'left';

  constructor() { }

  ngOnInit(): void {
  }

  showDropdown(pos: 'left' | 'right'){
    if(pos === 'left'){
      return this.isChild && this.routePosition === 'right';
    }else if(pos === 'right'){
      return !this.isChild || this.routePosition === 'left' || this.routePosition === 'center';
    }else{
      return false;
    }
  }
  //TODO: Traer los ngIf de los caret a un método
}
