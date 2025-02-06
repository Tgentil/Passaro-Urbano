import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pedido } from '../shared/pedido.model';
import { OrdemCompraService } from '../ordem-compra.service';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrl: './ordem-compra.component.css',
  providers: [OrdemCompraService],
})

export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra!: string;

  public formulario: FormGroup = new FormGroup({
    endereco: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120),
    ]),
    numero: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
    complemento: new FormControl(null),
    formaPagamento: new FormControl(null, [Validators.required]),
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    @Inject(CarrinhoService) private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      console.log('Formulário inválido');

      this.formulario.get('endereco')?.markAsTouched();
      this.formulario.get('numero')?.markAsTouched();
      this.formulario.get('complemento')?.markAsTouched();
      this.formulario.get('formaPagamento')?.markAsTouched();
    } else {
      console.log(this.formulario.value);
      let pedido: Pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento
      );
      this.ordemCompraService
        .efetivarCompra(pedido)
        .subscribe((idPedido: string) => {
          console.log(
            'Pedido cadastrado com sucesso. Número do pedido: ' + idPedido
          );
          this.idPedidoCompra = idPedido;
        });
    }
  }
}
