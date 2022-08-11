import { Message } from '../../entities/message'
import { db } from './../../database/index'
import { IMessageRepository } from './../IMessageRepository'

export class MessageRepository implements IMessageRepository {
  public async findAll (): Promise<Message[]> {
    const messages = await db.query('select * from mensagem order by data_mensagem desc')
    return messages.rows
  }

  public async saveMessage (message: Message): Promise<void> {
    await db.query('insert into mensagem(nome, email, telefone, mensagem) values ($1, $2, $3, $4)',
      [message.nome, message.email, message.telefone, message.mensagem])
  }
}
