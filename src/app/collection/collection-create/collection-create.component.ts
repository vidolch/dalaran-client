import { Component, Inject } from '@angular/core';
import { Collection } from '../collection';
import { CollectionService } from '../collection.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-collection-create',
  templateUrl: './collection-create.component.html',
  styleUrls: ['./collection-create.component.css']
})
export class CollectionCreateComponent {
  collection = new Collection();
  isUpdate = false;

  constructor(
    private service: CollectionService,
    public dialogRef: MatDialogRef<CollectionCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public id: string) {
    if (id) {
      this.selectForEdit(id);
    }
  }

  submitCollection() {
    if (!this.isUpdate) {
      this.service.create(this.collection).subscribe(() => {
        this.collection = new Collection();
        this.service.collectionCreated();
      });
    } else {
      this.service.update(this.collection.id, this.collection).subscribe(() => {
        this.collection = new Collection();
        this.service.collectionCreated();
      });
      this.isUpdate = false;
    }
    this.dialogRef.close();
  }

  private selectForEdit(id: string): any {
    this.service.getOne(id)
      .subscribe(model => {
        this.collection = model;
        this.isUpdate = true;
      });
  }
}
