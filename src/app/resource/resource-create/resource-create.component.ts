import { Component, OnInit, Input, Inject } from '@angular/core';
import { Resource } from '../Resource';
import { ResourceService } from '../resource.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

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
  resourceForm = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    path: ['', Validators.required],
    collection_id: ['', Validators.required],
    created_timestamp: [null],
    updated_timestamp: [null],

  });
  isUpdate = false;

  constructor(
    private service: ResourceService,
    public dialogRef: MatDialogRef<ResourceCreateComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ResourceCreateData) {
    if (data) {
      this.service.collectionId = data.CollectionId;

      if (data.Id) {
        this.selectForEdit(data.Id);
      } else {
        this.resourceForm.patchValue({
          ...this.resourceForm.value,
          collection_id: data.CollectionId
        });
      }
    }
  }

  submitResource() {
    if (!this.isUpdate) {
      this.service.create(this.resourceForm.value).subscribe(model => {
        this.service.resourceCreated();
      });
    } else {
      this.service.update(this.resourceForm.value.id, this.resourceForm.value).subscribe(model => {
        this.service.resourceCreated();
      });
      this.isUpdate = false;
    }
    this.dialogRef.close();
  }

  private selectForEdit(id: string): any {
    this.service.getOne(id)
      .subscribe(model => {
        this.resourceForm.patchValue({
          ...model
        });
        this.isUpdate = true;
      });
  }
}
