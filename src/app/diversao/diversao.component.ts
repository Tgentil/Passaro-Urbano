import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService],
})
export class DiversaoComponent implements OnInit {
  public ofertas!: Oferta[];

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertasService
      .getOfertasPorCategoria('diversao')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      });
  }
}
{
}
