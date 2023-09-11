import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable, Observer } from 'rxjs';


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
    private ofertasService: OfertasService
  ) {}

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
    .then((result: Oferta) => { 
      this.oferta = result;
    });
    // this.route.params.subscribe({
    //   next: (parametro: any) => {
    //     console.log(parametro);
    //   },
    //   error: (erro: any) => {
    //     console.log(erro);
    //   },
    //   complete: () => {
    //     console.log('Processamento foi classificado como concluído!');
    //   },
    // });



    // let tempo = interval(2000);

    // tempo.subscribe((intervalo: number) => {
    //   console.log(intervalo);
    // });


    //observable (observável)
    let meuObservableTeste = new Observable((observer: Observer<number>) => {
      observer.next(1);
      observer.next(3);
      observer.complete();
    });
    
    //observable (observador)
    meuObservableTeste.subscribe({
      next: (resultado: number) => console.log(resultado  + Number('10')),
      error: (erro: string) => console.log(erro),
      complete: () => console.log('Stream de eventos foi finalizada'),
    });
  }
}