import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { ErrorService } from './error-service.service';

import { Improvement } from './../Models/improvement.model';
import { environment as env } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImprovementService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  // ** Get Improvements
  getImprovement(): Observable<any> {
    return this.http.get(env.apiUrl + 'improvement/').pipe(
      tap(data => {
        console.log(data);
      }),
      catchError(this.handleError('getImprovement', []))
    )
  }

    // ** Get Improvement Detail
    getImprovementDetail(id: number): Observable<Improvement> {
      return this.http.get<any>(env.apiUrl + 'improvement/' + id)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('getImprovement'))
      );
    }

  // ** Add a Improvements
  addImprovement(improvement: Improvement): Observable<Improvement> {
    return this.http.post<Improvement>(env.apiUrl + 'improvement/new', improvement, { responseType: 'json' })
      .pipe(
        tap(data => {
          console.log(data);
        }),
        catchError(this.errorService.handleError<Improvement>('addImprovement'))
      );
  }

  // PUT :  Edit a improvement
  editImprovement(improvement: Improvement, id: number): Observable<Improvement> {
    return this.http.put<Improvement>(env.apiUrl + 'improvement/edit/' + id, improvement, { responseType: 'json' })
      .pipe(
        tap((data: Improvement) => console.log(data)),
        catchError(this.errorService.handleError<Improvement>('editImprovement'))
      );
  }

  /** DELETE: delete one improvement */
  deleteImprovement(id: number): Observable<Improvement> {
    const url = env.apiUrl + 'improvement/delete/' + id;
    return this.http.delete<any>(url)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('deleteImprovement'))
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
