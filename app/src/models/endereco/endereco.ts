export class Endereco {
    constructor(
        public readonly loradouro: string,
        public readonly bairro: string,
        public readonly cidade: string,
        public readonly uf: string,
        public readonly cep: string,
        public readonly numero: number,
        public readonly complemento: string
    ) {}
}
