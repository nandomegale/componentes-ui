import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentesUiModule } from 'projects/componentes-ui/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentesUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
