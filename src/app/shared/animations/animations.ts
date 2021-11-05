import {
  trigger,
  transition,
  animate,
  style,
  state
} from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ backgroundColor: 'black', opacity: 0 })),
  transition(':enter, :leave', [ // 'void => *, * => void'
    animate(2000)
  ])
]);