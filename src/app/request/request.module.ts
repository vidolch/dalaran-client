import { FormsModule } from '@angular/forms';
import { MaterialUimoduleModule } from './../material-uimodule.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { RequestCreateComponent } from './request-create/request-create.component';
import { RequestService } from './request.service';
import { SharedModule } from '../shared/shared.module';
import { CovalentCodeEditorModule } from '@covalent/code-editor';


@NgModule({
  declarations: [
    RequestListComponent,
    RequestCreateComponent,
    RequestDetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialUimoduleModule,
    FormsModule,
    SharedModule,
    CovalentCodeEditorModule
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
