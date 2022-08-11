import { MessageRepository } from '../../repositores/implementations/MessageRepository'
import { GetMessagesUseCase } from './GetMessagesUseCase'
import { GetMessagesController } from './GetMessagesController'

const messageRepository = new MessageRepository()
const getMessagesUseCase = new GetMessagesUseCase(messageRepository)
export const getMessagesControler = new GetMessagesController(getMessagesUseCase)
