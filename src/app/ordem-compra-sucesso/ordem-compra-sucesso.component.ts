import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrl: './ordem-compra-sucesso.component.css'
})
export class OrdemCompraSucessoComponent implements OnInit {
  @Input() public idPedidoCompra!: string;

  constructor() {}

  ngOnInit(): void {}

}
