import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceService } from './resource.service';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourceCreateComponent } from './resource-create/resource-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialUimoduleModule } from '../material-uimodule.module';
import { RequestModule } from '../request/request.module';


@NgModule({
  declarations: [
    ResourceListComponent,
    ResourceCreateComponent,
    ResourceDetailsComponent,
  ],
  imports: [
    BrowserModule,
    MaterialUimoduleModule,
    FormsModule,
    RequestModule
  ],
  exports: [
    ResourceDetailsComponent,
    ResourceListComponent,
  ],
  providers: [
    ResourceService,
  ],
  entryComponents: [
    ResourceCreateComponent,
  ]
})
export class ResourceModule { }
