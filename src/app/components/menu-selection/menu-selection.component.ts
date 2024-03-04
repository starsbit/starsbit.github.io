import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-selection',
  templateUrl: './menu-selection.component.html',
  styleUrls: ['./menu-selection.component.sass'],
})
export class MenuSelectionComponent {
  @Input() menuItems: string[] = [];

  @Input() public onClick: Function = (event: any) => {};
}
