import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars-background',
  templateUrl: './stars-background.component.html',
  styleUrls: ['./stars-background.component.sass'],
})
export class StarsBackgroundComponent {
  @Input() moveStars: boolean = false;

  constructor() {}
}
