import { Message } from '../entities/message'

export interface IMessageRepository{
    findAll(): Promise<Message[]>
    saveMessage(message: Message): Promise<void>
}
