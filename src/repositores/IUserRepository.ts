import { User } from '../entities/User'

export interface IUserRepository {
  findByEmail(email: string): Promise<User>
  findByName(name: string): Promise<User[]>
  createUser(user: User): Promise<void>
}
