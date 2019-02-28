import { RequestService } from './../request.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Request } from '../request';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit, OnChanges {
  request: Request;
  collectionId: string;
  resourceId: string;

  constructor(private route: ActivatedRoute, private http: RequestService) {}

  ngOnInit() {
    this.getRequest();
  }

  ngOnChanges() {
    this.getRequest();
  }

  private getRequest() {
    this.route.params.subscribe(params => {
      this.collectionId = params.collectionId;
      this.http.collectionId = params.collectionId;
      this.resourceId = params.resourceId;
      this.http.resourceId = params.resourceId;
      this.http.getOne(params.id).subscribe(request => {
        this.request = request;
      });
    });
  }
}
