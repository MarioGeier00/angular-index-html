import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {SharedUiModule} from "@angular-index-html/shared-ui";
import {HeaderContentComponent} from "../../../../libs/shared-ui/src/lib/header-content/header-content.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {initialNavigation: 'enabledBlocking'}),
    SharedUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderContentComponent],
})
export class AppModule {
}
