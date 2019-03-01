import { ResourceCreateComponent } from './../../resource/resource-create/resource-create.component';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Collection } from '../collection';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css']
})
export class CollectionDetailsComponent implements OnInit, OnChanges {
  @Input() collectionId: string;
  @Output() resourceId: EventEmitter<string> = new EventEmitter();
  collection: Collection;
  resources: any[];

  constructor(
    private http: CollectionService,
    public dialog: MatDialog) {}
  ngOnChanges() {
    this.http.getOne(this.collectionId).subscribe(collection => {
      this.collection = collection;
    });
  }

  ngOnInit() {
    this.http.getOne(this.collectionId).subscribe(collection => {
      this.collection = collection;
    });
  }

  setResourceDetails(id: string) {
    this.resourceId.emit(id);
  }

  openCreateDialog() {
    this.dialog.open(ResourceCreateComponent, {
      data: {
        CollectionId: this.collectionId
      }
    });
  }
}
