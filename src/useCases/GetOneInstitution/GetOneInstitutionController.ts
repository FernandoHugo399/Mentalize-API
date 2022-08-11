import { GetOneInstitutionUseCase } from './GetOneInstitutionUseCase'
import { Request, Response } from 'express'

export class GetOneInstitutionController {
  private getOneInstitutionUseCase!: GetOneInstitutionUseCase

  constructor (getOneInstitutionUseCase: GetOneInstitutionUseCase) {
    this.getOneInstitutionUseCase = getOneInstitutionUseCase
  }

  public async handle (req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id)
      const institution = await this.getOneInstitutionUseCase.execute(id)

      return res.status(200).send({ institution })
    } catch (err) {
      return res.status(200).send({ error: err.message })
    }
  }
}
