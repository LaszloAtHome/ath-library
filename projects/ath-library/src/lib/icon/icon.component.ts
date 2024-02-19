import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ath-icon',
  template: `<div style="position: absolute; bottom: .4em; right: 1em;"> <img [attr.src]="icon" /> </div>`,
})
export class AthIconComponent {
  @Input() icon: string = '';
}
