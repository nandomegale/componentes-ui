import { NgModule } from '@angular/core';
import { ComponenteUiUmComponent } from './componente-ui-um/componente-ui-um.component';
import { ComponentesUiComponent } from './componentes-ui.component';

@NgModule({
  declarations: [ComponentesUiComponent, ComponenteUiUmComponent],
  imports: [],
  exports: [ComponentesUiComponent, ComponenteUiUmComponent],
})
export class ComponentesUiModule {}
