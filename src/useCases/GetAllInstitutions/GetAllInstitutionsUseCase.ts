import { IInstitutionRepository } from '../../repositores/IInstitutionRepository'

export class GetAllInstitutionsUseCase {
  private institutionRepository!: IInstitutionRepository

  constructor (institutionRepository: IInstitutionRepository) {
    this.institutionRepository = institutionRepository
  }

  public async execute () {
    return this.institutionRepository.findAll()
  }
}
