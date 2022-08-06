export class LocalStorageUtils {
    
    public obterUsuario() {
        try{
            return JSON.parse(localStorage.getItem('mercurio.user') || "");
        } catch {
            return null;
        }
    }

    public salvarDadosLocaisUsuario(response: any) {
        this.salvarTokenUsuario(response.accessToken);
        this.salvarUsuario(response.userToken);
    }

    public limparDadosLocaisUsuario() {
        localStorage.removeItem('mercurio.token');
        localStorage.removeItem('mercurio.user');
    }

    public obterTokenUsuario(): string | null {
        return localStorage.getItem('mercurio.token');
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('mercurio.token', token);
    }

    public salvarUsuario(user: string) {
        localStorage.setItem('mercurio.user', JSON.stringify(user));
    }

}