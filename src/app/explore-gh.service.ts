import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { User, SearchAns } from './user';


const apiCall = 'https://api.github.com/';

@Injectable({
  providedIn: 'root'
})
export class ExploreGhService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private handleError<T> (operation = 'operation', result?:T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
  private log(message: string) {
    this.messageService.log(`explore-gh: ${message}`);
  }

  getUser(login: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/users/${login}`);
  }

  getUserRepos(login: string): Observable<Object> {
    return this.http.get(`https://api.github.com/users/${login}/repos`);
  }

  getUsers(term: string): Observable<any> {
    if (!term.trim()) {
      return of([])
    }
    return this.http.get<SearchAns>(`https://api.github.com/search/users?q=${term}&page=1&per_page=20`);
  }

  getPage(term: string, page: number) {
    return this.http.get<SearchAns>(`https://api.github.com/search/users?q=${term}&page=${page}&per_page=20`);
  }
}
