import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PanormasComponent } from './components/panormas/panormas.component';
import { PanormaDataService } from './services/panorma-data.service';
import { PanormaInterceptor } from './services/Panorma.interceptor';

@NgModule({
  declarations: [
    PanormasComponent,
    AppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    PanormaDataService,
    { provide: HTTP_INTERCEPTORS, useClass: PanormaInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
