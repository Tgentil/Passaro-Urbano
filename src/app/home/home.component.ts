import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService],
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[] | undefined;
  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {

    this.ofertasService
      .getOfertas()
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      })

      .catch((param: any) => {
      });
  }
}
