import { Component, OnInit, Input, Inject } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request';
import { HttpMethod } from '../HttpMethod';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
  request = new Request();
  isUpdate = false;
  httpMethods = [];

  constructor(
    private service: RequestService,
    public dialogRef: MatDialogRef<RequestCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RequestCreateData) {
    if (data) {
      this.service.collectionId = data.CollectionId;
      this.service.resourceId = data.ResourceId;

      if (data.Id) {
        this.selectForEdit(data.Id);
      }
    }

    for (const enumMember in HttpMethod) {
      if (HttpMethod[enumMember] != null) {
        this.httpMethods.push({key: enumMember, value: HttpMethod[enumMember]});
      }
    }
  }

  submitRequest() {
    if (!this.isUpdate) {
      this.service.create(this.request).subscribe(model => {
        this.request = new Request();
        this.service.requestsCreated();
      });
    } else {
      this.service.update(this.request.id, this.request).subscribe(model => {
        this.request = new Request();
        this.service.requestsCreated();
      });
      this.isUpdate = false;
    }
    this.dialogRef.close();
  }

  private selectForEdit(id: string): any {
    this.service.getOne(id)
      .subscribe(model => {
        this.request = model;
        this.isUpdate = true;
      });
  }
}
