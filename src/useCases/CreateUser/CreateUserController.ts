import { CreateUserUseCase } from './CreateUserUseCase'
import { Request, Response } from 'express'

export class CreateUserController {
    private createUserUseCase: CreateUserUseCase

    constructor (createUserUseCase: CreateUserUseCase) {
      this.createUserUseCase = createUserUseCase
    }

    public async handle (req: Request, res: Response): Promise<Response> {
      try {
        const response = await this.createUserUseCase.execute(req.body)
        res.set('Authorization', response)
        return res.status(200).send({ message: 'Usuário criado com sucesso!' })
      } catch (err) {
        return res.status(200).send({ error: err.message })
      }
    }
}
