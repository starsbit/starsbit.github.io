import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('* => Unkown', fade()),
]);

function fade() {
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)',
      }),
    ]),
    // Animate the new page in
    query(':enter', [
      animate(
        '600ms ease',
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
      ),
    ]),
  ];
}
