/* eslint-disable camelcase */
export class User {
    public readonly id_usuario!: string
    public nome!: string
    public email!: string
    public telefone!: string
    public nascimento!: string
    public senha!: string

    constructor (props: User) {
      Object.assign(this, props)
    }
}
