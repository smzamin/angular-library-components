import { ZListItemModule } from 'z-list-item';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ModalModule.forRoot(), AppRoutingModule, ZListItemModule, ReactiveFormsModule, DragDropModule
  ],
  providers: [ BsModalService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
