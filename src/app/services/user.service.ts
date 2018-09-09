import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private messageSource = new BehaviorSubject<string>(null);
  currentsearch = this.messageSource.asObservable();

  private catSource = new BehaviorSubject({ name: 'Name (A-Z)', code: 'login', asc: true });
  catSearch = this.catSource.asObservable();

  constructor(private http: HttpClient) { }

  changeSearch(searchInput) {
    this.messageSource.next(searchInput)
  }

  changeCat(category) {
    this.catSource.next(category)
  }

  getUsers(input) {
    return this.http.get('https://api.github.com/search/users?q=' + input);
  }

  getAllRepo(repos_url){
    return this.http.get(repos_url);
  }
}
