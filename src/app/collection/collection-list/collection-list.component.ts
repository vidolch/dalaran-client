import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Collection } from '../collections';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
  collections: Collection[] = null;

  constructor(private service: CollectionService) { }

  ngOnInit() {
    this.getCollections();
  }

  getCollections() {
    this.service.get()
      .subscribe(collections => {
        this.collections = collections.contents;
      });
  }

}
