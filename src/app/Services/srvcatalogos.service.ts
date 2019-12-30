import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Tipocuenta} from '../models/domains/TipoCuenta';

@Injectable({
  providedIn: 'root'
})
export class SrvcatalogosService {

  protected urlService = 'http://localhost:3000/catalogos'
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getTypeAccounts(): Observable<Tipocuenta[]>{
    return this.http.get(this.urlService+'?catalogo=TipoCuenta').pipe(
      map(response => response as Tipocuenta[])
    );
}

getTypeIdents(): Observable<Tipocuenta[]>{
  return this.http.get(this.urlService+'?catalogo=TipoIdent').pipe(
    map(response => response as Tipocuenta[])
  );
}
}
