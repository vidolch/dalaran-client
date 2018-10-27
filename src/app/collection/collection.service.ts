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
  getPath = 'api/collections';
  postPath = 'api/collections';

  private changed = new Subject<string>();
  changed$ = this.changed.asObservable();

  collectionCreated() {
    this.changed.next();
  }
}
