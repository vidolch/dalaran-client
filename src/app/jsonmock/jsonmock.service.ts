import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import JSONMock from './jsonmock';
import { HttpClient } from '@angular/common/http';
import { of  } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class JsonmockService {
  baseURL: string = 'http://localhost:61618/';
  getPath: string = 'api/mocks';
  constructor(private http: HttpClient) { }

  getMocks(): Observable<JSONMock[]> {
    return this.http.get<JSONMock[]>(this.baseURL + this.getPath)
      .pipe(
        tap(mocks => this.log('fetched mocks')),
        catchError(this.handleError('getMocks', []))
      )
  }
  
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
