import { UsuarioResponse, UsuarioToken } from "../conta/models/usuario";

export class LocalStorageUtils {
    
    public obterUsuario(): UsuarioToken {
        return JSON.parse(localStorage.getItem('mercurio.user') || this.UsuarioTokenEmpty());
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
        localStorage.setItem('mercurio.token', token);
    }

    public obterCidade(): string {
        return localStorage.getItem('mercurio.cidade') || '';
    }

    public obterEstado(): string {
        return localStorage.getItem('mercurio.estado') || '';
    }

    public salvarEstado(estadoId: string): void {
        localStorage.setItem('mercurio.estado', estadoId);
    }

    public salvarCidade(cidadeId: string): void {
        localStorage.setItem('mercurio.cidade', cidadeId);
    }

    public salvarUsuario(user: UsuarioToken): void {
        localStorage.setItem('mercurio.user', JSON.stringify(user));
        this.salvarEstado(user['estado']);
        this.salvarCidade(user['cidade']);
    }

    public usuarioEstaLogado(): boolean {
        return this.obterTokenUsuario() !== null;
    }

    UsuarioTokenEmpty = (): string => (JSON.stringify({
        id: '',
        cidade: '',
        email: '',
        estado: '',
        claims: []
    }));
}