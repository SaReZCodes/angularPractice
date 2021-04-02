import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthState, AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private authStore: AuthStore, private http: HttpClient) {
  }
  
  login(cred: { username: string, password: string }) {
    // در خواست به api
   // return this.http
   //   .post(`${API}/login` cred)
   //   .pipe(tap((authState: AuthState) => this.authStore.update(authState)));
   
   // جعل درخواست لاگین
   return of({ name: cred.username, token: '1234' }).pipe(
     tap((authState: AuthState) => this.authStore.update(authState)) //  به‌روزرسانی استور
      );
    }
  
   logout() {
     this.authStore.reset(); // بازگشت به حالت آغازین
  }

  get(){
    return this.authStore.getValue();
  }

}
