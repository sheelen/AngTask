import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PanormasComponent } from './components/panormas/panormas.component';
import { PanormaDataService } from './services/panorma-data.service';

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
    PanormaDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
