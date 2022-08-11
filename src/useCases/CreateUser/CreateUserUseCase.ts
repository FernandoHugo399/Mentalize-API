import { UserRepository } from './../../repositores/implementations/UserRepository'
import { ICreateUserDTO } from './CreateUserDTO'
export class CreateUserUseCase {
  private userRepository: UserRepository

  constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public async execute (user: ICreateUserDTO) {
    // eslint-disable-next-line camelcase

    if (!user.nome || !user.email || !user.telefone || !user.nascimento || !user.senha) {
      throw new Error('Todos os campos não foram preenchidos')
    }

    this.formatData(user)

    const { nome, email, telefone, nascimento, senha } = user
  }

  private formatData (user: ICreateUserDTO) {
    user.nome.trim()
    user.email.trim()
    user.telefone.trim()
  }
}
