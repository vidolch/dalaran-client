import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUimoduleModule } from './material-uimodule.module';

import { AppComponent } from './app.component';
import { JsonmockComponent } from './jsonmock/jsonmock.component';
import { JsonmocklistComponent } from './jsonmock/jsonmocklist/jsonmocklist.component';
import { JsonmockService } from './jsonmock/jsonmock.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JsonmockcreateComponent } from './jsonmock/jsonmockcreate/jsonmockcreate.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    JsonmockComponent,
    JsonmocklistComponent,
    JsonmockcreateComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUimoduleModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    JsonmockService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
