import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SidePanComponent } from './side-pan/side-pan.component';
import { MainPanComponent } from './main-pan/main-pan.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    SidePanComponent,
    MainPanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
