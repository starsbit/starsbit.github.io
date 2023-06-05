import { Component } from '@angular/core';
import { slider } from 'src/app/animations/slide-in-animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [slider],
})
export class HomeComponent {}
