import { InstitutionBankingInformation } from '../../entities/InstitutionBankingInformation'
import { IInstitutionBankingInformationRepository } from '../IInstitutionBankingInformationRepository'
import { db } from '../../database'

export class InstitutionBankingInformationRepository implements IInstitutionBankingInformationRepository {
  public async findById (id: number): Promise<InstitutionBankingInformation> {
    const institutionBI = await db.query(`
    select banco_pix_1, pix_1, qr_code_pix_1, banco_pix_2, pix_2, qr_code_pix_2,
    instituicao.id_instituicao, nome, logo, localizacao, sobre_curto
    from informacao_bancaria_instituicao
    inner join instituicao
    on instituicao.id_instituicao = informacao_bancaria_instituicao.id_instituicao
    where instituicao.id_instituicao = $1
    `, [id])
    return institutionBI.rows[0]
  }
}
