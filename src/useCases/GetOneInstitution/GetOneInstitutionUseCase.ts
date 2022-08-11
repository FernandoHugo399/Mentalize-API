import { IInstitutionRepository } from '../../repositores/IInstitutionRepository'

export class GetOneInstitutionUseCase {
  private institutionRepository!: IInstitutionRepository

  constructor (institutionRepository: IInstitutionRepository) {
    this.institutionRepository = institutionRepository
  }

  public async execute (id: number) {
    if (!id) throw new Error('Instituição não encontrada')

    const institution = await this.institutionRepository.findById(id)

    if (!institution) throw new Error('Instituição não encontrada')

    return institution
  }
}
