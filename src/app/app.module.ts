import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { GlobalErrorHandlerService } from './GlobalErrorHandlerService';


import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';


@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,    
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
