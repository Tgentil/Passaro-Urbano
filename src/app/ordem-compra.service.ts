import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { URL_API } from './app.api';

import { Pedido } from './shared/pedido.model';

@Injectable({ providedIn: 'root' }) 
export class OrdemCompraService {
  constructor(private http: HttpClient) {}

  public efetivarCompra(pedido: Pedido): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-type', 'application/json');

    return this.http.post(`${URL_API}/pedidos`, JSON.stringify(pedido), { headers: headers })
      .pipe(map((resposta: any) => resposta));
  }
}