export interface ProdutoResponse {
  id: string,
  nome: string,
  imagem: string,
  mercado: string;
  valor: number;
}

export interface ProdutoUsuarioRequest {
  produtoId: string;
  mercadoId: string;
  valor: number;
}

export interface ProdutoUsuarioResponse {
  produtoId: string,
  nome: string,
  imagem: string,
  mercadoId: string,
  mercado: string;
  valor: number;
}