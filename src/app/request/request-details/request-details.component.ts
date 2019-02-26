import { RequestService } from './../request.service';
import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {
  request: Request;
  collectionId: string;
  resourceId: string;

  constructor(private route: ActivatedRoute, private http: RequestService) {}

  ngOnInit() {
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
