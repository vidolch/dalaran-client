import { FormsModule } from '@angular/forms';
import { MaterialUimoduleModule } from './../material-uimodule.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { RequestCreateComponent } from './request-create/request-create.component';
import { RequestService } from './request.service';


@NgModule({
  declarations: [
    RequestListComponent,
    RequestCreateComponent,
    RequestDetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialUimoduleModule,
    FormsModule
  ],
  exports: [
    RequestListComponent
  ],
  providers: [
    RequestService,
  ],
  entryComponents: [
    RequestCreateComponent,
    RequestDetailsComponent
  ]
})
export class RequestModule { }
