import { MailProvider } from './../../providers/implementations/MailProvider'
import { User } from './../../entities/User'
import { UserRepository } from './../../repositores/implementations/UserRepository'
import { ICreateUserDTO } from './CreateUserDTO'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export class CreateUserUseCase {
  private userRepository: UserRepository
  private mailProvider: MailProvider

  constructor (userRepository: UserRepository, mailProvider: MailProvider) {
    this.userRepository = userRepository
    this.mailProvider = mailProvider
  }

  public async execute (user: ICreateUserDTO) {
    // eslint-disable-next-line camelcase
    if (!user.nome || !user.email || !user.telefone || !user.nascimento || !user.senha) {
      throw new Error('Todos os campos não foram preenchidos')
    }

    const User = this.formatData(user)

    const verifyUser = await this.userRepository.findByEmail(User.email)
    if (verifyUser) {
      throw new Error('Este email de usuário já existe')
    }

    await this.userRepository.createUser(User)

    await this.mailProvider.sendMail({
      from: {
        email: '40657f960f-5d8abe+1@inbox.mailtrap.io',
        name: 'Hugo Fernando'
      },
      to: {
        email: User.email,
        name: User.nome
      },
      subject: 'Olá ' + User.nome,
      body: '<p>Sua conta foi criado com sucesso!</p>'
    })

    return jwt.sign({ id_usuario: User.id_usuario, email: User.email }, process.env.SECRET_JWT as string, { expiresIn: 0 })
  }

  private formatData (user: ICreateUserDTO) {
    const nome = user.nome.trim()
    const email = user.email.trim()
    const telefone = user.telefone.trim()
    const encryptedPassword = bcrypt.hashSync(user.senha, 10)
    const nascimento = user.nascimento.trim()

    const User: User = {
      id_usuario: Math.floor(Date.now() * Math.random()).toString(36),
      nome: nome,
      email: email,
      telefone: telefone,
      nascimento: nascimento,
      senha: encryptedPassword
    }

    return User
  }
}
