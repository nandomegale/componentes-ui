import { NgModule } from '@angular/core';
import { MinhaLibComponent } from './minha-lib.component';
import { MinhaLibComponenteUmComponent } from './minha-lib-componente-um/minha-lib-componente-um.component';

@NgModule({
  declarations: [MinhaLibComponent, MinhaLibComponenteUmComponent],
  imports: [],
  exports: [MinhaLibComponent, MinhaLibComponenteUmComponent],
})
export class MinhaLibModule {}
