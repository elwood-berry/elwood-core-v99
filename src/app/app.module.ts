import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KaleCutterComponent } from './kale-cutter/kale-cutter.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, KaleCutterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
