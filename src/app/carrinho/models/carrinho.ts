export interface Carrinho {
  id: string,
  itens: ProdutoCarrinho[],
  mercado: string,
  total: number
}

export interface ProdutoCarrinho {
  id: string;
  produtoId: string,
  nome: string,
  imagem: string,
  mercado: string;
  valor: number;
}

export interface ItemCarrinhoRequest {
  produtoId: string;
  mercadoId: string;
}