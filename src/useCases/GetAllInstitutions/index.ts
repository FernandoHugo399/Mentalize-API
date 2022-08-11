import { InstituionRepository } from '../../repositores/implementations/InstitutionRepository'
import { GetAllInstitutionsUseCase } from './GetAllInstitutionsUseCase'
import { GetAllInstitutionsController } from './GetAllInstitutionsController'

const instituionRepository = new InstituionRepository()
const getAllInstitutionsUseCase = new GetAllInstitutionsUseCase(instituionRepository)
export const getAllInstitutionsController = new GetAllInstitutionsController(getAllInstitutionsUseCase)
