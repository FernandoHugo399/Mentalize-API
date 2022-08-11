import { UserRepository } from './../../repositores/implementations/UserRepository'
export class CreateUserUseCase {
  private userRepository: UserRepository

  constructor (userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  public async execute () {
    console.log(2)
  }
}
