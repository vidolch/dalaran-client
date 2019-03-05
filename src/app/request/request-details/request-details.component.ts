import { RequestService } from './../request.service';
import { Component, OnInit, OnChanges, Inject } from '@angular/core';
import { Request } from '../request';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

interface RequestDetailsData {
  CollectionId: string;
  ResourceId: string;
  Id?: string;
}

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit, OnChanges {
  request: Request;
  collectionId: string;
  resourceId: string;
  requestId: string;

  constructor(
    private http: RequestService,
    public dialogRef: MatDialogRef<RequestDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RequestDetailsData) {
    if (data) {
      this.collectionId = data.CollectionId;
      this.resourceId = data.ResourceId;
      this.requestId = data.Id;
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.getRequest();
    });
  }

  ngOnChanges() {
    this.getRequest();
  }

  private getRequest() {
    this.collectionId = this.collectionId;
    this.http.collectionId = this.collectionId;
    this.resourceId = this.resourceId;
    this.http.resourceId = this.resourceId;
    this.http.getOne(this.requestId).subscribe(request => {
      this.request = request;
    });
  }
}
