import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MinhaLibModule } from 'minha-lib';
import { ComponentesUiModule } from 'projects/componentes-ui/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentesUiModule, MinhaLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
