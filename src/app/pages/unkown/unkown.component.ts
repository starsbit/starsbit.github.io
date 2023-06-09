import { Component } from '@angular/core';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import { fader } from 'src/app/animations/fade-animation';
import { slider } from 'src/app/animations/slide-in-animation';

@Component({
  selector: 'app-unkown',
  templateUrl: './unkown.component.html',
  styleUrls: ['./unkown.component.sass'],
  animations: [slider, fader],
})
export class UnkownComponent {
  loadingRouteConfig = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig = false;
      }
    });
  }

  onCountDownFinished() {
    this.router.navigate(['/home']);
  }
}
