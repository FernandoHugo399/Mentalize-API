/* eslint-disable camelcase */
export class Message {
  public readonly id_mensagem?: number
  public nome!: string
  public email!: string
  public telefone!: number
  public mensagem!: string
  public readonly data_mensagem?: string

  constructor (props: Message) {
    Object.assign(this, props)
  }
}
