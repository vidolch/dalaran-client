import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import { PaginatedResource } from './paginated-resource';
import { AuthService } from './auth/auth.service';

@Injectable()
export class RestService<T> {
  baseURL = 'http://localhost:5050/';

  public get getPath(): string {
    return 'api/';
  }

  public get postPath(): string {
    return 'api/';
  }

  public get updatePath(): string {
    return 'api/';
  }

  public get deletePath(): string {
    return 'api/';
  }

  constructor(protected http: HttpClient, private authService: AuthService) { }

  get(params: object = null): Observable<PaginatedResource<T>> {
    const headers = new HttpHeaders({ 'Authorization': this.authService.getAuthorizationHeaderValue() });

    let queryParams = '';
    if (params) {
      queryParams += '?';
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          queryParams += `${key}=${params[key]}&`;
        }
      }
      queryParams = queryParams.substring(0, queryParams.length - 1);
    }
    return this.http.get<PaginatedResource<T>>(this.baseURL + this.getPath + queryParams, { headers: headers })
      .pipe(
        tap(resources => this.log('fetched resources')),
        catchError(this.handleError('get', new PaginatedResource<T>()))
      );
  }

  getOne(id: string): Observable<T> {
    return this.http.get<T>(this.baseURL + this.getPath + id)
      .pipe(
        tap(resource => this.log('fetched resource')),
        catchError(this.handleError('getOne', {} as T))
      );
  }

  create(model: T): Observable<any | T> {
    return this.http.post<T>(this.baseURL + this.postPath, model)
      .pipe(
        tap(resource => this.log('created resource')),
        catchError(this.handleError('create', []))
      );
  }

  update(id: string, model: T): Observable<any | T> {
    return this.http.put<T>(this.baseURL + this.updatePath + id, model)
      .pipe(
        tap(resource => this.log('updated resource')),
        catchError(this.handleError('update', []))
      );
  }

  delete(id: string): Observable<any | T> {
    return this.http.delete<T>(this.baseURL + this.deletePath + id)
      .pipe(
        tap(resource => this.log('deleted resource')),
        catchError(this.handleError('delete', []))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  protected handleError<Td>(operation = 'operation', result?: Td) {
    return (error: any): Observable<Td> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as Td);
    };
  }

  protected log(message: string) {
    console.log(message);
  }
}
