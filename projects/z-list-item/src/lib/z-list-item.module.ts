import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ZListItemComponent } from './z-list-item.component';
import { DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    ZListItemComponent
  ],
  imports: [
    BrowserModule, DragDropModule
  ],
  exports: [
    ZListItemComponent
  ]
})
export class ZListItemModule { }
