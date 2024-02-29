import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  standalone: true,
  imports: [],
  templateUrl: './ordem-compra.component.html',
  styleUrl: './ordem-compra.component.css',
})
export class OrdemCompraComponent implements OnInit {
  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  public enderecoValido: boolean = false;
  public numeroValido: boolean = false;
  public complementoValido: boolean = false;
  public formaPagamentoValido: boolean = false;

  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;


  constructor() {}

  ngOnInit(): void {}

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;

    this.enderecoEstadoPrimitivo = false;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;

    this.numeroEstadoPrimitivo = false;

    const regex = /\d/;
    if (regex.test(this.numero)) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;

    this.formaPagamentoEstadoPrimitivo = false;

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
  }
}
