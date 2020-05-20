import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
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
  getWeaknessTags(): Observable<WeaknessTag[]> {
    return this.http.get<WeaknessTag[]>(env.apiUrl + 'WeaknessTag')
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('getWeaknessTags', []))
      );
  }

  // ** Get WeaknessTags Details
  getWeaknessTagDetail(id: string): Observable<WeaknessTag> {
    return this.http.get<any>(env.apiUrl + 'WeaknessTag/' + id)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('getWeaknessTags'))
      );
  }

  // ** Add a WeaknessTags
  addWeaknessTag(weaknessTag): Observable<WeaknessTag> {
    return this.http.post<WeaknessTag>(env.apiUrl + 'WeaknessTag/add', weaknessTag, { responseType: 'json' })
      .pipe(
        tap((data: WeaknessTag) => console.log(data)),
        catchError(this.errorService.handleError<WeaknessTag>('addWeaknessTag'))
      );
  }

  // ** Edit a WeaknessTags
  editWeaknessTag(weaknessTag, id: string): Observable<WeaknessTag> {
    return this.http.put<WeaknessTag>(env.apiUrl + 'WeaknessTag/edit' + id, weaknessTag, { responseType: 'json' })
      .pipe(
        tap((data: WeaknessTag) => console.log(data)),
        catchError(this.errorService.handleError<WeaknessTag>('editWeaknessTag'))
      );
  }

  // ** Delete a WeaknessTags
  deleteWeaknessTag(id: string): Observable<WeaknessTag> {
    const url = env.apiUrl + 'weaknessTag/delete/' + id;
    return this.http.delete<any>(url)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('deleteWeaknessTag'))
      );
  }
}
