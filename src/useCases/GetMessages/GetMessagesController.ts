import { Request, Response } from 'express'
import { GetMessagesUseCase } from './GetMessagesUseCase'

export class GetMessagesController {
  private getMessagesUseCase!: GetMessagesUseCase

  constructor (GetMessagesUseCase: GetMessagesUseCase) {
    this.getMessagesUseCase = GetMessagesUseCase
  }

  public async handle (req: Request, res: Response): Promise<Response> {
    try {
      const messages = await this.getMessagesUseCase.execute()
      return res.status(200).send({ messages })
    } catch (err) {
      return res.status(200).send({ error: err.message })
    }
  }
}
