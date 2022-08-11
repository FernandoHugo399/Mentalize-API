import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'
import { UserRepository } from '../../repositores/implementations/UserRepository'

const userRepository = new UserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)
export const createUserController = new CreateUserController(createUserUseCase)
