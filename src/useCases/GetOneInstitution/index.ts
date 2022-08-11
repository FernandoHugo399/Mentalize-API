import { InstituionRepository } from '../../repositores/implementations/InstitutionRepository'
import { GetOneInstitutionUseCase } from './GetOneInstitutionUseCase'
import { GetOneInstitutionController } from './GetOneInstitutionController'

const instituionRepository = new InstituionRepository()
const getOneInstitutionUseCase = new GetOneInstitutionUseCase(instituionRepository)
export const getOneInstitutionController = new GetOneInstitutionController(getOneInstitutionUseCase)
