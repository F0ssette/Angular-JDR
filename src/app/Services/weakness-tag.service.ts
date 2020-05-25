import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { ErrorService } from './error-service.service';

import { WeaknessTag } from './../Models/weaknessTag.model';
import { environment as env } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeaknessTagService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  // ** Get WeaknessTags
  getWeaknessTag(): Observable<any> {
    return this.http.get(env.apiUrl + 'weaknessTag/').pipe(
      tap(data => {
        console.log(data);
      }),
      catchError(this.handleError('getWeaknessTag', []))
    )
  }

    // ** Get WeaknessTag Detail
    getWeaknessTagDetail(id: number): Observable<WeaknessTag> {
      return this.http.get<any>(env.apiUrl + 'weaknessTag/' + id)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('getWeaknessTag'))
      );
    }

  // ** Add a WeaknessTags
  addWeaknessTag(weaknessTag: WeaknessTag): Observable<WeaknessTag> {
    return this.http.post<WeaknessTag>(env.apiUrl + 'weaknessTag/new', weaknessTag, { responseType: 'json' })
      .pipe(
        tap(data => {
          console.log(data);
        }),
        catchError(this.errorService.handleError<WeaknessTag>('addWeaknessTag'))
      );
  }

  // PUT :  Edit a weaknessTag
  editWeaknessTag(weaknessTag: WeaknessTag, id: number): Observable<WeaknessTag> {
    return this.http.put<WeaknessTag>(env.apiUrl + 'weaknessTag/edit/' + id, weaknessTag, { responseType: 'json' })
      .pipe(
        tap((data: WeaknessTag) => console.log(data)),
        catchError(this.errorService.handleError<WeaknessTag>('editWeaknessTag'))
      );
  }

  /** DELETE: delete one weaknessTag */
  deleteWeaknessTag(id: number): Observable<WeaknessTag> {
    const url = env.apiUrl + 'weaknessTag/delete/' + id;
    return this.http.delete<any>(url)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('deleteWeaknessTag'))
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
