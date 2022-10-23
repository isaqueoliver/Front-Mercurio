export interface Reporte {
  id: string,
  assunto: string,
  descricao: string,
  dataCadastro: string,
  status: string,
  resposta: string | null
}

export class ReporteConstantes {
  static readonly STATUS_AGUARDANDO: string = "Aguardando Resposta...";
  static readonly STATUS_RESPONDIDO: string = "Respondido";
}