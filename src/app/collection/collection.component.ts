import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collectionId: string;
  resourceId: string;
  constructor(private route: ActivatedRoute, private location: Location, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.collectionId = params.collectionId;
      this.resourceId = params.resourceId;
    });
  }

  setCollectionDetails(id: string) {
    this.collectionId = id;
    this.resourceId = null;
    this.location.replaceState(`/collections/${id}`);
    this.cdr.detectChanges();
  }

  setResourceDetails(id: string) {
    this.resourceId = id;
    this.location.replaceState(`/collections/${this.collectionId}/resources/${id}`);
    this.cdr.detectChanges();
  }
}
