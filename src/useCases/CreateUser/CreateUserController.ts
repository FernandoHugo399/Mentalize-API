import { CreateUserUseCase } from './CreateUserUseCase'
import { Request, Response } from 'express'

export class CreateUserController {
    private createUserUseCase: CreateUserUseCase

    constructor (createUserUseCase: CreateUserUseCase) {
      this.createUserUseCase = createUserUseCase
    }

    public async handle (req: Request, res: Response): Promise<Response> {
      try {
        await this.createUserUseCase.execute(req.body)
        return res.status(200).send('tudo certo aqui')
      } catch (err) {
        return res.status(200).send({ error: err.messsage })
      }
    }
}
