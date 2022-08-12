import supertest from 'supertest'
import app from '../../app'

describe('Testing useCase LoginUser', () => {
  it('should test a request in the route /login-user without body', async () => {
    const res = await supertest(app).post('/login-user')

    expect(res.body).toHaveProperty('error', 'Todos os campos não foram preenchidos')
  })

  it('should test a request in the route /login-user missing the "email"', async () => {
    const res = await supertest(app).post('/login-user').send({
      email: '',
      senha: '123123123'
    })

    expect(res.body).toHaveProperty('error', 'Todos os campos não foram preenchidos')
  })

  it('should test a request in the route /login-user missing the "senha"', async () => {
    const res = await supertest(app).post('/login-user').send({
      email: 'hugo1@gmail.com',
      senha: ''
    })

    expect(res.body).toHaveProperty('error', 'Todos os campos não foram preenchidos')
  })

  it('should test a request in the route /login-user with invalid password', async () => {
    const res = await supertest(app).post('/login-user').send({
      email: 'hugo1@gmail.com',
      senha: '1231231234'
    })

    expect(res.body).toHaveProperty('error', 'Email ou senha incorretos')
  })

  it('should test a request in the route /login-user with invalid email', async () => {
    const res = await supertest(app).post('/login-user').send({
      email: 'hugoesdff1@gmail.com',
      senha: '1231231231235'
    })

    expect(res.body).toHaveProperty('error', 'Email ou senha incorretos')
  })

  it('should test a request in the route /login-user with successful request', async () => {
    const res = await supertest(app).post('/login-user').send({
      email: 'hugo1@gmail.com',
      senha: '123123123'
    })

    expect(res.body).toHaveProperty('message', 'Usuário autenticado com sucesso!')
  })
})
