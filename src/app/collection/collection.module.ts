import { FormsModule } from '@angular/forms';
import { ResourceModule } from './../resource/resource.module';

import { CollectionComponent } from './collection.component';
import { CollectionListComponent } from './collection-list/collection-list.component';
import { CollectionService } from './collection.service';
import { CollectionCreateComponent } from './collection-create/collection-create.component';
import { CollectionDetailsComponent } from './collection-details/collection-details.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialUimoduleModule } from '../material-uimodule.module';

@NgModule({
  declarations: [
    CollectionComponent,
    CollectionListComponent,
    CollectionCreateComponent,
    CollectionDetailsComponent
  ],
  imports: [
    BrowserModule,
    ResourceModule,
    MaterialUimoduleModule,
    FormsModule
  ],
  providers: [
    CollectionService
  ],
  entryComponents: [
    CollectionCreateComponent
  ]
})
export class CollectionModule { }
