import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Resource } from '../Resource';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit, OnChanges {
  @Input() collectionId: string;
  @Input() resourceId: string;
  resource: Resource;

  constructor(private route: ActivatedRoute, private http: ResourceService) {}

  ngOnInit() {
    this.collectionId = this.collectionId;
    this.http.collectionId = this.collectionId;

    this.http.getOne(this.resourceId).subscribe(resource => {
      this.resource = resource;
    });
  }

  ngOnChanges() {
    this.collectionId = this.collectionId;
    this.http.collectionId = this.collectionId;

    this.http.getOne(this.resourceId).subscribe(resource => {
      this.resource = resource;
    });
  }

}
