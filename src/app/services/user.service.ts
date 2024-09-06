import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService { // Service para disponibilizar usuários para todo o projeto

  user: User | undefined;

  constructor() { }

  setUser(user: User | undefined){
    localStorage.setItem('user', JSON.stringify(user)) // persiste a informação obtida do usuário
    this.user = user;

  }

  getUser(){
    return this.user;
  }
}
