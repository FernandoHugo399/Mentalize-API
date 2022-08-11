import { Institution } from '../entities/Institution'

export interface IInstitutionRepository{
    findById(id: number): Promise<Institution>
    findAll(): Promise<Institution[]>
}
