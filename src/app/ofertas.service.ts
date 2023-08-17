import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { firstValueFrom } from 'rxjs';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService {
  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    const observable = this.http.get<Oferta[]>(`${URL_API}?destaque=true`);
    return firstValueFrom(observable);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    const observable = this.http.get<Oferta[]>(`${URL_API}?categoria=${categoria}`);
    return firstValueFrom(observable);
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    const observable = this.http.get<Oferta[]>(`${URL_API}?id=${id}`);
    return firstValueFrom(observable)
      .then((result: Oferta[]) => {
        return result[0];
      });
  }
  
}
