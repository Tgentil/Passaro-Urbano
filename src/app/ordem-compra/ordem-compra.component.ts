import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  standalone: true,
  imports: [],
  templateUrl: './ordem-compra.component.html',
  styleUrl: './ordem-compra.component.css',
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  public pedido: Pedido = new Pedido('', '', '', '');

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

  public formEstado: string = 'disabled';

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit() {
    // this.ordemCompraService.efetivarCompra();
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;

    this.enderecoEstadoPrimitivo = false;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
    this.habilitaForm();
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
    this.habilitaForm();
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }
    this.habilitaForm();
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;

    this.formaPagamentoEstadoPrimitivo = false;
    this.formaPagamentoValido = this.formaPagamento !== '';

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
    this.habilitaForm();
  }

  public habilitaForm(): void {
    if (
      this.enderecoValido == true &&
      this.numeroValido == true &&
      this.complementoValido == true &&
      this.formaPagamentoValido == true
    ) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }

  public confirmarCompra(): void {
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;

    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe({
        next: (resposta) => {
          console.log('Compra efetivada com sucesso!', resposta);
          // Adicione o que fazer após a confirmação da compra
        },
        error: (erro) => {
          console.error('Erro ao efetivar compra:', erro);
        }
      });
  }
}