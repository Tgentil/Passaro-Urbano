import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../services/ofertas.service';
import { TabService } from '../services/tab-manager.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit {
  public oferta?: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private tabService: TabService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService
        .getOfertaPorId(parametros['id'])
        .then((oferta: Oferta) => {
          this.oferta = oferta;
        });
      this.tabService.setActiveTab('como-usar');
    });
  }

  setActiveTab(tab: string): void {
    this.tabService.setActiveTab(tab);
  }

  getActiveTab() {
    return this.tabService.getActiveTab();
  }

}
