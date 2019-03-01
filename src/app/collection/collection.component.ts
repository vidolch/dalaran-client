import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { MatDialog } from '@angular/material';
import { CollectionCreateComponent } from './collection-create/collection-create.component';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collectionId: string;
  resourceId: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.collectionId = params.collectionId;
      this.resourceId = params.resourceId;
    });
  }

  setCollectionDetails(id: string) {
    this.collectionId = id;
    this.location.replaceState(`/collections/${id}`);
  }

  setResourceDetails(id: string) {
    this.resourceId = id;
    this.location.replaceState(`/collections/${this.collectionId}/resources/${id}`);
  }

  openCreateDialog() {
    this.dialog.open(CollectionCreateComponent);
  }
}
