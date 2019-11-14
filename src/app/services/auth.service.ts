import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(users: Users){
    return this.afa.auth.signInWithEmailAndPassword(users.email, users.password);
  }
  register(users: Users){
    return this.afa.auth.createUserWithEmailAndPassword(users.email , users.password);

  }
  logout(){

  }
  getAuth(){
      return this.afa.auth;
  }
}
