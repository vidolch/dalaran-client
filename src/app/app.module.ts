import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUimoduleModule } from './material-uimodule.module';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CollectionComponent } from './collection/collection.component';
import { CollectionListComponent } from './collection/collection-list/collection-list.component';
import { CollectionService } from './collection/collection.service';
import { CollectionCreateComponent } from './collection/collection-create/collection-create.component';
import { CollectionDetailsComponent } from './collection/collection-details/collection-details.component';
import { ResourceListComponent } from './resource/resource-list/resource-list.component';
import { ResourceService } from './resource/resource.service';
import { ResourceDetailsComponent } from './resource/resource-details/resource-details.component';
import { ResourceCreateComponent } from './resource/resource-create/resource-create.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailsComponent } from './request/request-details/request-details.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { RequestService } from './request/request.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollectionComponent,
    CollectionListComponent,
    CollectionCreateComponent,
    CollectionDetailsComponent,
    ResourceListComponent,
    ResourceCreateComponent,
    ResourceDetailsComponent,
    RequestListComponent,
    RequestCreateComponent,
    RequestDetailsComponent
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
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:5050'],
          sendAccessToken: true
      }
    })
  ],
  providers: [
    AuthGuard,
    CollectionService,
    ResourceService,
    RequestService,
    HttpClient
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CollectionCreateComponent,
    ResourceCreateComponent,
    RequestCreateComponent,
    RequestDetailsComponent
  ]
})
export class AppModule { }
