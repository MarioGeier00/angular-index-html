import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderContentComponent} from './header-content/header-content.component';
import {MainContentComponent} from './main-content/main-content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderContentComponent, MainContentComponent],
  exports: [HeaderContentComponent, MainContentComponent],
})
export class SharedUiModule {
}
