import { Component, OnInit, Input, Inject } from '@angular/core';
import { Resource } from '../Resource';
import { ResourceService } from '../resource.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

interface ResourceCreateData {
  CollectionId: string;
  Id?: string;
}

@Component({
  selector: 'app-resource-create',
  templateUrl: './resource-create.component.html',
  styleUrls: ['./resource-create.component.css']
})
export class ResourceCreateComponent {
  resource = new Resource();
  isUpdate = false;

  constructor(
    private service: ResourceService,
    public dialogRef: MatDialogRef<ResourceCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResourceCreateData) {
    if (data) {
      this.service.collectionId = data.CollectionId;

      if (data.Id) {
        this.selectForEdit(data.Id);
      }
    }
  }

  submitResource() {
    if (!this.isUpdate) {
      this.service.create(this.resource).subscribe(model => {
        this.resource = new Resource();
        this.service.resourceCreated();
      });
    } else {
      this.service.update(this.resource.id, this.resource).subscribe(model => {
        this.resource = new Resource();
        this.service.resourceCreated();
      });
      this.isUpdate = false;
    }
    this.dialogRef.close();
  }

  private selectForEdit(id: string): any {
    this.service.getOne(id)
      .subscribe(model => {
        this.resource = model;
        this.isUpdate = true;
      });
  }
}
