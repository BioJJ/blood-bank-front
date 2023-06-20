import { Address } from "./Address";

export class Candidate {
  id: number | null = null;
  nome: string = '';
  cpf: string = '';
  rg: string = '';
  data_nasc: string = '';
  sexo: string = '';
  mae: string = '';
  pai: string = '';
  email: string = '';
  telefone_fixo: string = '';
  celular: string = '';
  altura: string = '';
  peso: string = '';
  tipo_sanguineo: string = '';
  address: Address | null = null;
}
