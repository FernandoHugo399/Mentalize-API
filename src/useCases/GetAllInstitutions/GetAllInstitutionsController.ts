import { GetAllInstitutionsUseCase } from './GetAllInstitutionsUseCase'
import { Request, Response } from 'express'

export class GetAllInstitutionsController {
  private getAllInstitutionUseCase!: GetAllInstitutionsUseCase

  constructor (getAllInstitutionUseCase: GetAllInstitutionsUseCase) {
    this.getAllInstitutionUseCase = getAllInstitutionUseCase
  }

  public async handle (req: Request, res: Response): Promise<Response> {
    try {
      const institutions = await this.getAllInstitutionUseCase.execute()
      return res.status(200).send({ institutions })
    } catch (err) {
      return res.status(200).send({ error: err.message })
    }
  }
}
