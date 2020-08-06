import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any) {
    const result = await this.http.post<any>(`${environment.api}/auth/login`, user).toPromise();
    if (result && result.acess_token) {
      window.localStorage.setItem('token', result.access_token);
      return true;
    }
    return false;

    /* Fixed test
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'my-token');
      resolve(true);
    });*/
  }

  async createAccount(account: any) {
    const result = await this.http.post<any>(`${environment.api}/users`, account).toPromise();
    return result;

    /* Fixed test
    return new Promise((resolve) => {
      resolve(true);
    });*/
  }
  
}
