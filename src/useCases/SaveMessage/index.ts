import { MailProvider } from '../../providers/implementations/MailProvider'
import { MessageRepository } from '../../repositores/implementations/MessageRepository'
import { SaveMessageUseCase } from './SaveMessageUseCase'
import { SaveMessageController } from './SaveMessageController'

const mailProvider = new MailProvider()
const messageRepository = new MessageRepository()
const saveMessageUseCase = new SaveMessageUseCase(mailProvider, messageRepository)
export const saveMessageController = new SaveMessageController(saveMessageUseCase)
