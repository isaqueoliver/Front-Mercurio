import { UsuarioResponse, UsuarioToken } from "../conta/models/usuario";

export class LocalStorageUtils {
    
    public obterUsuario(): UsuarioToken {
        return JSON.parse(localStorage.getItem('mercurio.user') || '');
    }

    public salvarDadosLocaisUsuario(response: UsuarioResponse): void {
        this.salvarTokenUsuario(response.acessToken);
        this.salvarUsuario(response.usuarioToken);
    }

    public limparDadosLocaisUsuario(): void {
        localStorage.removeItem('mercurio.token');
        localStorage.removeItem('mercurio.user');
    }

    public obterTokenUsuario(): string | null {
        return localStorage.getItem('mercurio.token');
    }

    public salvarTokenUsuario(token: string): void {
        console.log(token);
        localStorage.setItem('mercurio.token', token);
    }

    public salvarUsuario(user: UsuarioToken): void {
        localStorage.setItem('mercurio.user', JSON.stringify(user));
    }

    public obterCidade(): string {
        return this.obterUsuario()['cidade'] || '';
    }

    public obterEstado(): string {
        return this.obterUsuario()['estado'] || '';
    }

    public salvarEstado(estadoId: string): void {
        localStorage.setItem('mercurio.user', JSON.stringify(this.UsuarioTokenAtualizarEstado(this.obterUsuario(), estadoId)));
    }

    public salvarCidade(cidadeId: string): void {
        localStorage.setItem('mercurio.user', JSON.stringify(this.UsuarioTokenAtualizarCidade(this.obterUsuario(), cidadeId)));
    }

    UsuarioTokenAtualizarEstado(user: UsuarioToken, estadoId: string): UsuarioToken {
        return <UsuarioToken>{
            id: user['id'] || '',
            cidade: user['cidade'] || '',
            estado: estadoId,
            email: user['email'] || '',
            claims: user['claims'] || []
        }
    }

    UsuarioTokenAtualizarCidade(user: UsuarioToken, cidadeId: string): UsuarioToken {
        return <UsuarioToken>{
            id: user['id'] || '',
            cidade: cidadeId,
            estado: user['estado'] || '',
            email: user['email'] || '',
            claims: user['claims'] || []
        }
    }
}