import { IUserRepository } from './../IUserRepository'
import { User } from '../../entities/User'
import { db } from '../../database'

export class UserRepository implements IUserRepository {
  public async findByEmail (email: string): Promise<User> {
    const User = await db.query(`
      select id_usuario, nome, email, telefone, nascimento, senha
      from usuario where email = $1
      `, [email])
    return User.rows[0]
  }

  public async findByName (name: string): Promise<User[]> {
    const User = await db.query(`
      select id_usuario, nome, email, telefone, nascimento
      from usuario where nome = $1
      `, [name])
    return User.rows
  }

  public async createUser (user: User): Promise<void> {
    await db.query(`
      insert into usuario (id_usuario, nome, email, telefone, nascimento, senha) values
      ($1, $2, $3, $4, $5, $6)
    `, [user.id_usuario, user.nome, user.email, user.telefone, user.nascimento, user.senha])
  }
}
