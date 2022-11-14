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

function UsuarioTokenAtualizarEstado(user: UsuarioToken, estadoId: string): UsuarioToken {
    return <UsuarioToken>{
        id: user['id'] || '',
        cidade: user['cidade'] || '',
        estado: estadoId,
        email: user['email'] || '',
        claims: user['claims'] || []
    }
}

function UsuarioTokenAtualizarCidade(user: UsuarioToken, cidadeId: string): UsuarioToken {
    var teste = user['estado'];
    console.log(teste);
    return <UsuarioToken>{
        id: user['id'] || '',
        cidade: cidadeId,
        estado: user['estado'] || '',
        email: user['email'] || '',
        claims: user['claims'] || []
    }
}