import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService { // Service para disponibilizar usuários para todo o projeto
  baseurl: string = environment.apiUrl;
  user: User | undefined;

  constructor(private http: HttpClient) { }

  getGitUser(username: string){
    return this.http.get(this.baseurl + 'users/' + username).pipe(
      map((response: any) => {
        return response;
      })
    )
  }

  setUser(user: User | undefined){
    localStorage.setItem('user', JSON.stringify(user)) // persiste a informação obtida do usuário
    this.user = user;

  }

  getUser(){
    return this.user;
  }
}
