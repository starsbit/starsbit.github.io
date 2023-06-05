import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slider } from './animations/slide-in-animation';
import { fader } from './animations/fade-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [slider, fader],
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
