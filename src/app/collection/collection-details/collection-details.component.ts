import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from '../collection.service';
import { Collection } from '../collection';

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

  constructor(private route: ActivatedRoute, private http: CollectionService) {}
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
}
