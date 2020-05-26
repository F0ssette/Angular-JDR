import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { ErrorService } from './error-service.service';

import { PowerTag } from './../Models/powerTag.model';
import { environment as env } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PowerTagService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  // ** Get PowerTags
  getPowerTag(): Observable<any> {
    return this.http.get(env.apiUrl + 'powerTag/').pipe(
      tap(data => {
        console.log(data);
      }),
      catchError(this.handleError('getPowerTag', []))
    )
  }

    // ** Get PowerTag Detail
    getPowerTagDetail(id: number): Observable<PowerTag> {
      return this.http.get<any>(env.apiUrl + 'powerTag/' + id)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('getPowerTag'))
      );
    }

  // ** Add a PowerTags
  addPowerTag(powerTag: PowerTag): Observable<PowerTag> {
    return this.http.post<PowerTag>(env.apiUrl + 'powerTag/new', powerTag, { responseType: 'json' })
      .pipe(
        tap(data => {
          console.log(data);
        }),
        catchError(this.errorService.handleError<PowerTag>('addPowerTag'))
      );
  }

  // PUT :  Edit a powerTag
  editPowerTag(powerTag: PowerTag, id: number): Observable<PowerTag> {
    return this.http.put<PowerTag>(env.apiUrl + 'powerTag/edit/' + id, powerTag, { responseType: 'json' })
      .pipe(
        tap((data: PowerTag) => console.log(data)),
        catchError(this.errorService.handleError<PowerTag>('editPowerTag'))
      );
  }

  /** DELETE: delete one powerTag */
  deletePowerTag(id: number): Observable<PowerTag> {
    const url = env.apiUrl + 'powerTag/delete/' + id;
    return this.http.delete<any>(url)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('deletePowerTag'))
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
