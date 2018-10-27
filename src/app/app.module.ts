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


@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    CollectionListComponent,
    CollectionCreateComponent
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
    CollectionService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
