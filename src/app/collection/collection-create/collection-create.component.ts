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
  newCollection = new Collection();
  createView = false;

  constructor(private service: CollectionService) { }

  ngOnInit() {
  }

  toggleCreateView() {
    this.createView = true;
  }

  createCollection() {
    this.service.create(this.newCollection).subscribe(model => {
      this.newCollection = new Collection();
      this.service.collectionCreated();
    });
  }
}
