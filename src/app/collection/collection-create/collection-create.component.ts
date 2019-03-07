import { Component, Inject } from '@angular/core';
import { CollectionService } from '../collection.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-collection-create',
  templateUrl: './collection-create.component.html',
  styleUrls: ['./collection-create.component.css']
})
export class CollectionCreateComponent {
  collectionForm = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    created_timestamp: [null],
    updated_timestamp: [null],
  });
  isUpdate = false;

  constructor(
    private service: CollectionService,
    public dialogRef: MatDialogRef<CollectionCreateComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public id: string) {
    if (id) {
      this.selectForEdit(id);
    }
  }

  submitCollection() {
    if (!this.isUpdate) {
      this.service.create(this.collectionForm.value).subscribe(() => {
        this.service.collectionCreated();
      });
    } else {
      this.service.update(this.collectionForm.value.id, this.collectionForm.value).subscribe(() => {
        this.service.collectionCreated();
      });
      this.isUpdate = false;
    }
    this.dialogRef.close();
  }

  private selectForEdit(id: string): any {
    this.service.getOne(id)
      .subscribe(model => {
        this.collectionForm.patchValue({
          ...model
        });
        this.isUpdate = true;
      });
  }
}
