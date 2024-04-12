import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FallingMenuComponent } from './falling-menu/falling-menu.component';

@NgModule({
  declarations: [HeaderComponent, FallingMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FallingMenuComponent] // Exports components to be used in other modules
})
export class HeaderMenuModule { }

