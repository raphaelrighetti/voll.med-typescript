import { Endereco } from "../endereco/endereco";

export class PacienteCadastro {
    constructor(
        public readonly nome: string,
        public readonly email: string,
        public readonly telefone: string,
        public readonly cpf: string,
        public readonly endereco: Endereco
    ) {}
}
