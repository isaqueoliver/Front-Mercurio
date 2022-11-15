export interface Reporte {
  id: string,
  assunto: string,
  descricao: string,
  dataCadastro: string,
  status: string,
  resposta: string | null
}

export interface ReporteRequest {
  assuntoId: string;
  descricao: string;
}

export interface Assunto {
  id: string;
  descricao: string;
}

export class ReporteConstantes {
  static readonly STATUS_AGUARDANDO: string = "Aguardando Resposta...";
  static readonly STATUS_RESPONDIDO: string = "Respondido";
}