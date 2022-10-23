export interface Produto {
  id: string,
  nome: string,
  descricao: string,
  imagem: string
}

export interface ProdutoUsuario {
  id: string,
  nome: string,
  imagem: string,
  mercado: string,
  valor: number,
  dataCadastro: string
}

export interface Mercado{
  id: string,
  nome: string,
}

export interface Marca {
  id: string,
  nome: string
}