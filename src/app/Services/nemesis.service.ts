import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { ErrorService } from './error-service.service';

import { Nemesis } from './../Models/nemesis.model';
import { environment as env } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NemesisService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  // ** Get Nemesiss
  getNemesis(): Observable<any> {
    return this.http.get(env.apiUrl + 'nemesis/').pipe(
      tap(data => {
        console.log(data);
      }),
      catchError(this.handleError('getNemesis', []))
    )
  }

    // ** Get Nemesis Detail
    getNemesisDetail(id: number): Observable<Nemesis> {
      return this.http.get<any>(env.apiUrl + 'nemesis/' + id)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('getNemesis'))
      );
    }

  // ** Add a Nemesiss
  addNemesis(nemesis: Nemesis): Observable<Nemesis> {
    return this.http.post<Nemesis>(env.apiUrl + 'nemesis/new', nemesis, { responseType: 'json' })
      .pipe(
        tap(data => {
          console.log(data);
        }),
        catchError(this.errorService.handleError<Nemesis>('addNemesis'))
      );
  }

  // PUT :  Edit a nemesis
  editNemesis(nemesis: Nemesis, id: number): Observable<Nemesis> {
    return this.http.put<Nemesis>(env.apiUrl + 'nemesis/edit/' + id, nemesis, { responseType: 'json' })
      .pipe(
        tap((data: Nemesis) => console.log(data)),
        catchError(this.errorService.handleError<Nemesis>('editNemesis'))
      );
  }

  /** DELETE: delete one nemesis */
  deleteNemesis(id: number): Observable<Nemesis> {
    const url = env.apiUrl + 'nemesis/delete/' + id;
    return this.http.delete<any>(url)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('deleteNemesis'))
      );
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
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
}
