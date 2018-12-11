import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from '../collection.service';
import { Collection } from '../collection';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css']
})
export class CollectionDetailsComponent implements OnInit {
  collection: Collection;
  resources: any[];

  constructor(private route: ActivatedRoute, private http: CollectionService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.http.getOne(params.id).subscribe(collection => {
        this.collection = collection;
      });
    });
  }

}
