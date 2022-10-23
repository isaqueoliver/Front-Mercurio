export interface Carrinho {
  id: string,
  produtos: ProdutoUsuario[],
  mercado: string,
  total: number
}

export interface ProdutoUsuario {
  id: string,
  nome: string,
  valor: number,
  imagem: string
}