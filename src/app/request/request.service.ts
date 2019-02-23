import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import { RestService } from '../restservice.service';
import { Request } from './request';
import { Subject } from 'rxjs';

@Injectable()
export class RequestService extends RestService<Request> {
  collectionId: string = null;
  resourceId: string = null;
  public get getPath(): string {
    return `api/collections/${this.collectionId}/resources/${this.resourceId}/request`;
  }

  public get postPath(): string {
    return `api/collections/${this.collectionId}/resources/${this.resourceId}/request`;
  }

  public get updatePath(): string {
    return `api/collections/${this.collectionId}/resources/${this.resourceId}/request`;
  }

  public get deletePath(): string {
    return `api/collections/${this.collectionId}/resources/${this.resourceId}/request`;
  }

  private changed = new Subject<string>();
  changed$ = this.changed.asObservable();

  private selectedForEdit = new Subject<string>();
  selectedForEdit$ = this.selectedForEdit.asObservable();

  resourceCreated() {
    this.changed.next();
  }

  selectForEdit(id: string) {
    this.selectedForEdit.next(id);
  }
}
