import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnChanges, OnInit {
  @Input() collectionId: string;
  @Input() resourceId: string;
  displayedColumns: string[] = ['name', 'template', 'http_method', 'created_timestamp', 'actions'];
  dataSource = null;

  constructor(private service: RequestService) {
    this.service.changed$.subscribe( changed => {
      this.getRequests();
    });
  }

  ngOnInit() {
    this.service.collectionId = this.collectionId;
    this.service.resourceId = this.resourceId;
    this.getRequests();
  }

  ngOnChanges() {
    this.service.collectionId = this.collectionId;
    this.service.resourceId = this.resourceId;
    this.getRequests();
  }

  getRequests() {
    this.service.get().subscribe(requests => {
      this.dataSource = new MatTableDataSource<Request>(requests.contents);
    });
  }

  deleteRequest(id: string) {
    this.service.delete(id)
      .subscribe(x => {
        this.getRequests();
      });
  }

  selectForEdit(id: string) {
    this.service.selectForEdit(id);
  }
}
