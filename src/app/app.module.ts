import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localEs from  '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr'

registerLocaleData(localEs)
registerLocaleData(localFr)

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { SafeDOMPipe } from './pipes/safe-dom.pipe';
import { HidenPipe } from './pipes/hiden.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    SafeDOMPipe,
    HidenPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
