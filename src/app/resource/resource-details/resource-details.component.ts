import { Component, OnInit } from '@angular/core';
import { Resource } from '../Resource';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {
  resource: Resource;
  collectionId: string;

  constructor(private route: ActivatedRoute, private http: ResourceService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.collectionId = params.collectionId;
      this.http.collectionId = params.collectionId;

      this.http.getOne(params.id).subscribe(collection => {
        this.resource = collection;
      });
    });
  }

}
