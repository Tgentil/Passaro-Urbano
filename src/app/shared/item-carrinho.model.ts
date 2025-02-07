class ItemCarrinho {
  constructor(
    public id: number,
    public img: { url: string } | null,
    public titulo: string,
    public descricao_oferta: string,
    public valor: number,
    public quantidade: number
  ) {}
}

export {ItemCarrinho}