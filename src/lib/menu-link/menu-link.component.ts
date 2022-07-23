import { Component, Input } from '@angular/core';
import {MenuRoute, RoutesPosition} from "../models/MenuRoute";

@Component({
  selector: 'jc-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.scss']
})
export class MenuLinkComponent{

  @Input() routes!: MenuRoute[];
  @Input() isChild: boolean = false;
  @Input() routePosition: RoutesPosition = 'left';

  constructor() { }

  showCaret(){
  //  TODO: if the screen is small show the caret-right
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
}
