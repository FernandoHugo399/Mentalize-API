import { IMessageRepository } from './../../repositores/IMessageRepository'

export class GetMessagesUseCase {
  private messageRepository!: IMessageRepository

  constructor (MessageRepository: IMessageRepository) {
    this.messageRepository = MessageRepository
  }

  public async execute () {
    return this.messageRepository.findAll()
  }
}
