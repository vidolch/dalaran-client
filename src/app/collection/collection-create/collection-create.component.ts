import { Component, OnInit, Output } from '@angular/core';
import { Collection } from '../collection';
import { CollectionService } from '../collection.service';
import { EventEmitter } from 'events';
import { AddCollectionEvent } from '../events/add-collection.event';

@Component({
  selector: 'app-collection-create',
  templateUrl: './collection-create.component.html',
  styleUrls: ['./collection-create.component.css']
})
export class CollectionCreateComponent implements OnInit {
  collection = new Collection();
  createView = false;
  isUpdate = false;

  constructor(private service: CollectionService) {
    this.service.selectedForEdit$.subscribe( id => {
      this.selectForEdit(id);
    });
  }

  ngOnInit() {
  }

  toggleCreateView() {
    this.createView = true;
  }

  submitCollection() {
    if (!this.isUpdate) {
      this.service.create(this.collection).subscribe(model => {
        this.collection = new Collection();
        this.service.collectionCreated();
      });
    } else {
      this.service.update(this.collection.id, this.collection).subscribe(model => {
        this.collection = new Collection();
        this.service.collectionCreated();
      });
      this.isUpdate = false;
    }
    this.createView = false;
  }

  private selectForEdit(id: string): any {
    this.service.getOne(id)
      .subscribe(model => {
        this.collection = model;
        this.createView = true;
        this.isUpdate = true;
      });
  }
}
