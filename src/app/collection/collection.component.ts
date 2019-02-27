import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collectionId: string;
  constructor() { }

  ngOnInit() {
  }

  setCollectionDetails(id: string) {
    this.collectionId = id;
  }
}
