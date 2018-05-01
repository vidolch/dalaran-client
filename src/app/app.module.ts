import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUimoduleModule } from './material-uimodule.module';

import { AppComponent } from './app.component';
import { JsonmockComponent } from './jsonmock/jsonmock.component';
import { JsonmocklistComponent } from './jsonmock/jsonmocklist/jsonmocklist.component';
import { JsonmockService } from './jsonmock/jsonmock.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    JsonmockComponent,
    JsonmocklistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUimoduleModule,
    HttpClientModule
  ],
  providers: [
    JsonmockService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
