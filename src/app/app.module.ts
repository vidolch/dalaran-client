import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUimoduleModule } from './material-uimodule.module';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthModule } from './auth/auth.module';
import { CollectionModule } from './collection/collection.module';
import { ResourceModule } from './resource/resource.module';
import { RequestModule } from './request/request.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUimoduleModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AuthModule,
    CollectionModule,
    ResourceModule,
    RequestModule,
    SharedModule
  ],
  providers: [
    CookieService,
    HttpClient
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
