import { NgModule } from '@angular/core';
import { JComponentsComponent } from './j-components.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { MenuLinkComponent } from './menu-link/menu-link.component';





@NgModule({
  declarations: [
    JComponentsComponent,
    InfoCardComponent,
    NavbarComponent,
    MenuLinkComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    JComponentsComponent,
    InfoCardComponent,
    NavbarComponent
  ]
})
export class JComponentsModule { }
