import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { firstValueFrom } from 'rxjs';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService {
  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    const observable = this.http.get<Oferta[]>(
      `${URL_API}/ofertas?destaque=true`
    );
    return firstValueFrom(observable);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    const observable = this.http.get<Oferta[]>(
      `${URL_API}/ofertas?categoria=${categoria}`
    );
    return firstValueFrom(observable);
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    const observable = this.http.get<Oferta[]>(`${URL_API}/ofertas?id=${id}`);
    return firstValueFrom(observable).then((result: Oferta[]) => {
      return result[0];
    });
  }
  public getComoUsarOfertaPorId(id: number): Promise<string> {
    const observable = this.http.get<{ id: number; descricao: string }[]>(
      `${URL_API}/como-usar?id=${id}`
    );
    return firstValueFrom(observable).then((resultArray) => {
      return resultArray[0].descricao;
    });
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    const observable = this.http.get<{ id: number; descricao: string }[]>(
      `${URL_API}/onde-fica?id=${id}`
    );
    return firstValueFrom(observable).then((resultArray) => {
      return resultArray[0].descricao;
    });
  }
}
