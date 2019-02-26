import { HttpMethod } from './../HttpMethod';
import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request';
import { MatTableDataSource } from '@angular/material';
import { HttpMethod } from '../HttpMethod';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  @Input() collectionId: string;
  @Input() resourceId: string;
  request = new Request();
  createView = false;
  isUpdate = false;
  httpMethods = [
    HttpMethod.GET,
    HttpMethod.POST
  ];

  constructor(private service: RequestService) {
    this.service.selectedForEdit$.subscribe( id => {
      this.selectForEdit(id);
    });
  }

  ngOnInit() {
    this.service.collectionId = this.collectionId;
  }

  toggleCreateView() {
    this.createView = true;
  }

  submitRequest() {
    if (!this.isUpdate) {
      this.service.create(this.request).subscribe(model => {
        this.request = new Request();
        this.service.requestsCreated();
      });
    } else {
      this.service.update(this.request.id, this.request).subscribe(model => {
        this.request = new Request();
        this.service.requestsCreated();
      });
      this.isUpdate = false;
    }
    this.createView = false;
  }

  cancelCreate(): any {
    this.createView = false;
  }

  private selectForEdit(id: string): any {
    this.service.getOne(id)
      .subscribe(model => {
        this.request = model;
        this.createView = true;
        this.isUpdate = true;
      });
  }
}
