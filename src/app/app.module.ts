import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardGameComponent } from './board-game/board-game.component';
import { ChooseLevelComponent } from './choose-level/choose-level.component';
import { InfoGameComponent } from './info-game/info-game.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardGameComponent,
    ChooseLevelComponent,
    InfoGameComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
