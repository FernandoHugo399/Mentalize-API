import { Request, Response } from 'express'
import { LoginUserUseCase } from './LoginUserUseCase'

export class LoginUserController {
    private loginUserUseCase: LoginUserUseCase

    constructor (loginUserUseCase: LoginUserUseCase) {
      this.loginUserUseCase = loginUserUseCase
    }

    public async handle (req: Request, res: Response): Promise<Response> {
      try {
        const response = await this.loginUserUseCase.execute(req.body)
        res.set('Authorization', response)
        return res.status(200).send({ message: 'Usuário autenticado com sucesso!' })
      } catch (err) {
        return res.status(200).send({ error: err.message })
      }
    }
}
