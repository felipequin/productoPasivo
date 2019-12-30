import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Account} from '../models/account/account';

@Injectable({
  providedIn: 'root'
})
export class SrvAccountsService {

  protected urlService = 'http://localhost:3000/cuentas/'
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account[]>{
  return this.http.get(this.urlService).pipe(
    map(response => response as Account[])
  );

  }
//CRUD DE APERTURA DE CUENTAS DE AHORRO
  create(account: Account) : Observable<Account> {
    return this.http.post<Account>(this.urlService, account, {headers: this.httpHeaders})
  }

  update(account: Account): Observable<Account>{
    return this.http.put<Account>(`${this.urlService}/${account.id}`, account, {headers: this.httpHeaders})
  }

  delete(id: string): Observable<Account>{
    return this.http.delete<Account>(`${this.urlService}/${id}`, {headers: this.httpHeaders})
  }

  getAccount(account): Observable<any> {
  //const account = "0000000000456789";  
  return this.http.get(this.urlService + account + "/");  
  }
}
