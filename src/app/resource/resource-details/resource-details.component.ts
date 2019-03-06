import { RequestCreateComponent } from './../../request/request-create/request-create.component';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Resource } from '../Resource';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../resource.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit, OnChanges {
  @Input() collectionId: string;
  @Input() resourceId: string;
  resource: Resource;

  constructor(
    private http: ResourceService,
    public dialog: MatDialog) {}

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

  openCreateDialog() {
    this.dialog.open(RequestCreateComponent, {
      data: {
        CollectionId: this.collectionId,
        ResourceId: this.resourceId
      },
      width: '600px'
    });
  }
}
