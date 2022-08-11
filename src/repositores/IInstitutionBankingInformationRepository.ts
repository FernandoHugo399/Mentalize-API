import { InstitutionBankingInformation } from '../entities/InstitutionBankingInformation'

export interface IInstitutionBankingInformationRepository {
  findById(id: number): Promise<InstitutionBankingInformation>
}
