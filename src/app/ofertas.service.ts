import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OfertasService {
  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    const observable = this.http.get<Oferta[]>('http://localhost:3000/ofertas?destaque=true');
    return firstValueFrom(observable);
}


  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    const observable = this.http.get<Oferta[]>(`http://localhost:3000/ofertas?categoria=${categoria}`);
    return firstValueFrom(observable);
}

public getOfertaPorId(id: number): Promise<Oferta> {
  const observable = this.http.get<Oferta>(`http://localhost:3000/ofertas/${id}`);
  
  return firstValueFrom(observable)
    .then((result: Oferta) => {
      return result;
    });
}


}