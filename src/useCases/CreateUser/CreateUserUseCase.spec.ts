import supertest from 'supertest'
import app from '../../app'

describe('Testing useCase CreateUser', () => {
  it('should test a request in the route /create-user without body', async () => {
    const res = await supertest(app).post('/create-user')

    expect(res.body).toHaveProperty('error', 'Todos os campos não foram preenchidos')
  })

  it('should test a request in the route /create-user missing the "nome"', async () => {
    const res = await supertest(app).post('/create-user').send({
      nome: '',
      email: 'hugo1@gmail.com',
      telefone: '81988457189',
      senha: '123123123',
      nascimento: '2005/08/23'
    })

    expect(res.body).toHaveProperty('error', 'Todos os campos não foram preenchidos')
  })

  it('should test a request in the route /create-user missing the "email"', async () => {
    const res = await supertest(app).post('/create-user').send({
      nome: 'Hugo Fernando',
      email: '',
      telefone: '81988457189',
      senha: '123123123',
      nascimento: '2005/08/23'
    })

    expect(res.body).toHaveProperty('error', 'Todos os campos não foram preenchidos')
  })

  it('should test a request in the route /create-user missing the "senha"', async () => {
    const res = await supertest(app).post('/create-user').send({
      nome: 'Hugo Fernando',
      email: 'hugo1@gmail.com',
      telefone: '81988457189',
      senha: '',
      nascimento: '2005/08/23'
    })

    expect(res.body).toHaveProperty('error', 'Todos os campos não foram preenchidos')
  })

  it('should test a request in the route /create-user missing the "telefone"', async () => {
    const res = await supertest(app).post('/create-user').send({
      nome: 'Hugo Fernando',
      email: 'hugo1@gmail.com',
      telefone: '',
      senha: '123123123',
      nascimento: '2005/08/23'
    })

    expect(res.body).toHaveProperty('error', 'Todos os campos não foram preenchidos')
  })

  it('should test a request in the route /create-user missing "nascimento"', async () => {
    const res = await supertest(app).post('/create-user').send({
      nome: 'Hugo Fernando',
      email: 'hugo1@gmail.com',
      telefone: '81988457189',
      senha: '123123123',
      nascimento: ''
    })

    expect(res.body).toHaveProperty('error', 'Todos os campos não foram preenchidos')
  })

  it('should test a request in the route /create-user where user already exists', async () => {
    const res = await supertest(app).post('/create-user').send({
      nome: 'Hugo Fernando',
      email: 'hugo@gmail.com',
      telefone: '81988457189',
      senha: '123123123',
      nascimento: '2005/08/23'
    })

    expect(res.body).toHaveProperty('error', 'Este email de usuário já existe')
  })

  it('should test a request in the route /create-user with successful request', async () => {
    const res = await supertest(app).post('/create-user').send({
      nome: 'Teste com jest',
      email: Math.floor(Date.now() * Math.random()).toString(36) + 'Testecomjest@gmail.com',
      telefone: '81988457189',
      senha: '123123123',
      nascimento: '2000/08/23'
    })

    expect(res.body).toHaveProperty('message', 'Usuário criado com sucesso!')
  })
})
