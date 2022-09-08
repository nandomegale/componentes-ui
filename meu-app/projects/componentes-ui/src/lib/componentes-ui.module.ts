import { NgModule } from '@angular/core';
import { ComponentesUiComponent } from './componentes-ui.component';
import { ComponenteUiUmComponent } from './componente-ui-um/componente-ui-um.component';
import { ComponenteUiDoisComponent } from './componente-ui-dois/componente-ui-dois.component';

@NgModule({
  declarations: [
    ComponentesUiComponent,
    ComponenteUiUmComponent,
    ComponenteUiDoisComponent,
  ],
  imports: [],
  exports: [
    ComponentesUiComponent,
    ComponenteUiUmComponent,
    ComponenteUiDoisComponent,
  ],
})
export class ComponentesUiModule {}
