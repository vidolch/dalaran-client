import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import { RestService } from '../restservice.service';
import { Collection } from './collection';
import { Subject } from 'rxjs';

@Injectable()
export class CollectionService extends RestService<Collection> {
  public get getPath(): string {
    return 'api/collections/';
  }

  public get postPath(): string {
    return 'api/collections/';
  }

  public get updatePath(): string {
    return 'api/collections/';
  }

  public get deletePath(): string {
    return 'api/collections/';
  }

  private changed = new Subject<string>();
  changed$ = this.changed.asObservable();

  private selectedForEdit = new Subject<string>();
  selectedForEdit$ = this.selectedForEdit.asObservable();

  collectionCreated() {
    this.changed.next();
  }

  selectForEdit(id: string) {
    this.selectedForEdit.next(id);
  }
}
