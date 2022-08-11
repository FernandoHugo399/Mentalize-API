import { IInstitutionRepository } from './../IInstitutionRepository'
import { db } from '../../database'
import { Institution } from '../../entities/Institution'

export class InstituionRepository implements IInstitutionRepository {
  public async findById (id: number): Promise<Institution> {
    const institution = await db.query('select * from instituicao where id_instituicao = $1', [id])
    return institution.rows[0]
  }

  public async findAll (): Promise<Institution[]> {
    const institutions = await db.query('select * from instituicao')
    return institutions.rows
  }
}
