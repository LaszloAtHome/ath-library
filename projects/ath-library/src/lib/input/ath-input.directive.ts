import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[athInput]',
})
export class AthInputDirective {
  constructor(private el: ElementRef) {
    this.setBackgroundColor();
  }
  private setBackgroundColor() {
    this.el.nativeElement.style.position = 'relative';
    this.el.nativeElement.style.display = 'flex';
    this.el.nativeElement.style.alignItems = 'center';
  }
}
