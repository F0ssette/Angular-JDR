import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { ErrorService } from './error-service.service';

import { StoryTag } from './../Models/storyTag.model';
import { environment as env } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoryTagService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  // ** Get StoryTags
  getStoryTag(): Observable<any> {
    return this.http.get(env.apiUrl + 'storyTag/').pipe(
      tap(data => {
        console.log(data);
      }),
      catchError(this.handleError('getStoryTag', []))
    )
  }

    // ** Get StoryTag Detail
    getStoryTagDetail(id: number): Observable<StoryTag> {
      return this.http.get<any>(env.apiUrl + 'storyTag/' + id)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('getStoryTag'))
      );
    }

  // ** Add a StoryTags
  addStoryTag(storyTag: StoryTag): Observable<StoryTag> {
    return this.http.post<StoryTag>(env.apiUrl + 'storyTag/new', storyTag, { responseType: 'json' })
      .pipe(
        tap(data => {
          console.log(data);
        }),
        catchError(this.errorService.handleError<StoryTag>('addStoryTag'))
      );
  }

  // PUT :  Edit a storyTag
  editStoryTag(storyTag: StoryTag, id: number): Observable<StoryTag> {
    return this.http.put<StoryTag>(env.apiUrl + 'storyTag/edit/' + id, storyTag, { responseType: 'json' })
      .pipe(
        tap((data: StoryTag) => console.log(data)),
        catchError(this.errorService.handleError<StoryTag>('editStoryTag'))
      );
  }

  /** DELETE: delete one storyTag */
  deleteStoryTag(id: number): Observable<StoryTag> {
    const url = env.apiUrl + 'storyTag/delete/' + id;
    return this.http.delete<any>(url)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('deleteStoryTag'))
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
