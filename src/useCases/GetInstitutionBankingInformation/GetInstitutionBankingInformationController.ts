import { Request, Response } from 'express'
import { GetInstitutioBankingInformationUseCase } from './GetInstitutionBankingInformationUseCase'

export class GetInstitutionBankingInformationController {
  private getInstitutioBankingInformationUseCase: GetInstitutioBankingInformationUseCase

  constructor (getInstitutionBankingInformationUseCase: GetInstitutioBankingInformationUseCase) {
    this.getInstitutioBankingInformationUseCase = getInstitutionBankingInformationUseCase
  }

  public async handle (req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id)
      const institutionInformation = await this.getInstitutioBankingInformationUseCase.execute(id)
      return res.status(200).send({ institutionInformation })
    } catch (err) {
      return res.status(200).send({ error: err.message })
    }
  }
}
