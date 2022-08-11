import { MailProvider } from './../../providers/implementations/MailProvider'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'
import { UserRepository } from '../../repositores/implementations/UserRepository'

const userRepository = new UserRepository()
const mailProvider = new MailProvider()
const createUserUseCase = new CreateUserUseCase(userRepository, mailProvider)
export const createUserController = new CreateUserController(createUserUseCase)
