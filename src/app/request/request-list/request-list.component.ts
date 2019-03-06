import { RequestCreateComponent } from './../request-create/request-create.component';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { RequestDetailsComponent } from '../request-details/request-details.component';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnChanges, OnInit {
  @Input() collectionId: string;
  @Input() resourceId: string;
  displayedColumns: string[] = ['name', 'http_method', 'created_timestamp', 'actions'];
  dataSource = null;

  constructor(
    private service: RequestService,
    public dialog: MatDialog) {
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
    this.dialog.open(RequestCreateComponent, {
      data: {
        ResourceId: this.resourceId,
        CollectionId: this.collectionId,
        Id: id
      },
      width: '600px'
    });
  }

  openDetailsDialog(id: string) {
    this.dialog.open(RequestDetailsComponent, {
      data: {
        ResourceId: this.resourceId,
        CollectionId: this.collectionId,
        Id: id
      },
      width: '600px'
    });
  }
}
