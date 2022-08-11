/* eslint-disable camelcase */
export class Institution {
  public readonly id_instituicao?: number
  public nome!: string
  public logo!: string
  public email!: string
  public localizacao!: string
  public telefone_1!: string
  public telefone_2?: string
  public cpf_responsavel!: string
  public cnpj?: string
  public website!: string
  public sobre!: string
  public sobre_curto!: string

  constructor (props: Institution) {
    Object.assign(this, props)
  }
}
