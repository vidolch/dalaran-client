import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from '../collection.service';
import { Collection } from '../collection';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css']
})
export class CollectionDetailsComponent implements OnInit {
  @Input() collectionId: string;
  collection: Collection;
  resources: any[];

  constructor(private route: ActivatedRoute, private http: CollectionService) {}
  ngOnInit() {
    this.http.getOne(this.collectionId).subscribe(collection => {
      this.collection = collection;
    });
  }

}
