import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import { RestService } from '../restservice.service';
import { Collection } from './collections';

@Injectable()
export class CollectionService extends RestService<Collection> {
  getPath = 'api/collections';
  postPath = 'api/collections';
}
