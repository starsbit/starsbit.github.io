import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { CommonModule, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuSelectionComponent } from './menu-selection.component';

@NgModule({
  declarations: [MenuSelectionComponent],
  imports: [CommonModule, CdkMenu, CdkMenuItem, NgFor],
  exports: [MenuSelectionComponent],
})
export class MenuSelectionModule {}
