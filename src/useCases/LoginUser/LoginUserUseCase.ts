import { ILoginUserDTO } from './LoginUserDTO'
import { UserRepository } from './../../repositores/implementations/UserRepository'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export class LoginUserUseCase {
    private userRepository: UserRepository

    constructor (userRepository: UserRepository) {
      this.userRepository = userRepository
    }

    public async execute (user: ILoginUserDTO) {
      if (!user.email || !user.senha) {
        throw new Error('Todos os campos não foram preenchidos')
      }
      const User = this.formatData(user)

      const verifyUser = await this.userRepository.findByEmail(User.email)
      if (!verifyUser) {
        throw new Error('Email ou senha incorretos')
      }

      const verifyPassword = bcrypt.compareSync(User.senha, verifyUser.senha)
      if (!verifyPassword) {
        throw new Error('Email ou senha incorretos')
      }

      return jwt.sign({ id_usuario: verifyUser.id_usuario, email: verifyUser.email }, process.env.SECRET_JWT as string, { expiresIn: 1000 * 60 * 60 * 24 * 30 * 12 })
    }

    private formatData (user: ILoginUserDTO) {
      const User: ILoginUserDTO = {
        email: user.email.trim(),
        senha: user.senha
      }

      return User
    }
}
