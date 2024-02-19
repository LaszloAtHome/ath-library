import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { InputIconConfig } from '../interfaces/input/input-icon-config';

@Directive({
  selector: '[athInputIcon]',
})
export class AthInputIconDirective {
  @Input('athInputIcon') athInputIcon: InputIconConfig | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.athInputIcon) {
      // Crear el contenedor del icono
      let iconContainer = this.renderer.createElement('div');
      iconContainer.style.position = 'absolute';
        iconContainer.style.right = '4em';
      this.renderer.addClass(iconContainer, 'icon-container');

      // Crear el elemento de imagen
      const icon = this.renderer.createElement('img');
      this.renderer.setAttribute(icon, 'src', this.athInputIcon.iconUrl);
      this.renderer.addClass(icon, 'icon-img');
      this.renderer.appendChild(iconContainer, icon);

      // Agregar el contenedor del icono al input
      this.renderer.appendChild(
        this.el.nativeElement.parentElement,
        iconContainer
      );

    }
  }
}
