import { Endereco } from "../endereco/endereco.js";

export class Paciente {
    constructor(
        public readonly id: number,
        public readonly nome: string,
        public readonly email: string,
        public readonly telefone: string,
        public readonly cpf: string,
        public readonly endereco: Endereco
    ) {}
}
