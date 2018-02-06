import {animate, state, style, transition, trigger} from "@angular/animations";


export const pageTransition =
  trigger('transition', [
    state('in', style({
      transform: 'translateX(0)',
      opacity: 1
    })),

    transition('* => *', [
      style({ opacity: 1, transform: 'translateX(-250px)' }),
      animate(500)
    ]),
  ]);
