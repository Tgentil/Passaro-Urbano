import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../services/ofertas.service';
import { TabService } from '../services/tab-manager.service';
import { CarrinhoService } from '../carrinho.service';

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
    private tabService: TabService,
    @Inject(CarrinhoService) private carrinhoService: CarrinhoService
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

  adicionarItemCarrinho(oferta: Oferta): void {
    this.carrinhoService.incluirItem(oferta);
    console.log(this.carrinhoService.exibirItens());
  }

}
