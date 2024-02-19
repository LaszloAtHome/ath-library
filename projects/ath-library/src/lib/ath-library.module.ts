import { NgModule } from '@angular/core';
import { AthInputDirective } from './input/ath-input.directive';
import { AthInputIconDirective } from './input/ath-input-icon.directive';
import { AthIconComponent } from './icon/icon.component';

@NgModule({
  declarations: [AthInputDirective, AthInputIconDirective, AthIconComponent],
  exports: [AthInputDirective, AthInputIconDirective, AthIconComponent],
})
export class AthLibraryModule {}
