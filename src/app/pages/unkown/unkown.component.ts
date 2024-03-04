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

  menuItems = ['Start', 'About', 'Quit'];

  readonly _aboutUrl = 'https://github.com/starsbit/starsbit.github.io';

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

  onMenuItemClick(event: any, item: string) {
    if (item === 'Start') {
      this.router.navigate(['/home']);
    }
    if (item === 'About') {
      console.log(this._aboutUrl);
      window.open(this._aboutUrl, '_blank');
    }
    if (item === 'Quit') {
      window.close();
    }
  }
}
