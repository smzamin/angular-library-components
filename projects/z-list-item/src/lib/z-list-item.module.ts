import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ZListItemComponent } from './z-list-item.component';



@NgModule({
  declarations: [
    ZListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ZListItemComponent
  ]
})
export class ZListItemModule { }
