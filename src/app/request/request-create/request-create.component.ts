import { HttpStatusCode } from './../http-status-code';
import { ResponseType } from './../response-type';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request';
import { HttpMethod } from '../http-method';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

interface RequestCreateData {
  CollectionId: string;
  ResourceId: string;
  Id?: string;
}

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {
  requestForm = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    path: [''],
    template: ['', Validators.required],
    http_method: ['', Validators.required],
    response_type: ['', Validators.required],
    response_code: ['', Validators.required],
    resource_id: ['', Validators.required],
    created_timestamp: [null],
    updated_timestamp: [null],
  });

  isUpdate = false;
  httoMethods = HttpMethod;
  responseTypes = ResponseType;
  httpStatusCodes = HttpStatusCode;

  constructor(
    private service: RequestService,
    public dialogRef: MatDialogRef<RequestCreateComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: RequestCreateData) {
    if (data) {
      this.service.collectionId = data.CollectionId;
      this.service.resourceId = data.ResourceId;

      if (data.Id) {
        this.selectForEdit(data.Id);
      } else {
        this.requestForm.patchValue({
          ...this.requestForm.value,
          resource_id: data.ResourceId
        });
      }
    }
  }

  submitRequest() {
    if (!this.isUpdate) {
      this.service.create(this.requestForm.value).subscribe(model => {
        this.service.requestsCreated();
      });
    } else {
      this.service.update(this.requestForm.value.id, this.requestForm.value).subscribe(model => {
        this.service.requestsCreated();
      });
      this.isUpdate = false;
    }
    this.dialogRef.close();
  }

  private selectForEdit(id: string): any {
    this.service.getOne(id)
      .subscribe(model => {
        this.requestForm.patchValue({
          ...model
        });
        this.isUpdate = true;
      });
  }
}
