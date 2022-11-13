export interface UsuarioLogin {
    email: string;
    senha: string;
}

export interface UsuarioCadastro {
    id: string;
    nome: string;
    email: string;
    cpf: string;
    estadoId: string;
    cidadeId: string;
    password: string;
    confirmPassword: string;
}

export interface UsuarioResponse {
    acessToken: string,
    expireIn: number,
    usuarioToken: UsuarioToken
}

export interface UsuarioToken {
    id: string,
    estado: string,
    cidade: string,
    email: string,
    claims: Claims[]
}

export interface Claims {
    value: string,
    type: string
}