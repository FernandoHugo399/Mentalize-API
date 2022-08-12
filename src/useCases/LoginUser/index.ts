import { UserRepository } from './../../repositores/implementations/UserRepository'
import { LoginUserUseCase } from './LoginUserUseCase'
import { LoginUserController } from './LoginUserController'

const userRepository = new UserRepository()
const loginUserUseCase = new LoginUserUseCase(userRepository)
export const loginUserControler = new LoginUserController(loginUserUseCase)
