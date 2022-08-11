import supertest from 'supertest'
import app from '../../app'

describe('Testing useCase saveMessage', () => {
  it('should test a request in the route /save-message without body', async () => {
    const res = await supertest(app).post('/save-message')

    expect(res.body).toHaveProperty('error')
  })

  it('should test a request in the route /save-message missing the "nome"', async () => {
    const res = await supertest(app).post('/save-message').send({
      nome: '',
      email: 'testjest@email.com',
      telefone: '12221231',
      mensagem: 'Fazendo teste com jest'
    })

    expect(res.body).toHaveProperty('error')
  })

  it('should test a request in the route /save-message missing the "email"', async () => {
    const res = await supertest(app).post('/save-message').send({
      nome: 'teste',
      email: '',
      telefone: '12221231',
      mensagem: 'Fazendo teste com jest'
    })

    expect(res.body).toHaveProperty('error')
  })

  it('should test a request in the route /save-message missing the "mensagem"', async () => {
    const res = await supertest(app).post('/save-message').send({
      nome: 'teste',
      email: 'testjest@email.com',
      telefone: '12221231',
      mensagem: ''
    })

    expect(res.body).toHaveProperty('error')
  })

  it('should test a request in the route /save-message missing the "telefone"', async () => {
    const res = await supertest(app).post('/save-message').send({
      nome: 'teste',
      email: 'testjest@email.com',
      telefone: '',
      mensagem: 'Fazendo teste com jest'
    })

    expect(res.body).toHaveProperty('error')
  })

  it('should test a request in the route /save-message missing with invalid number', async () => {
    const res = await supertest(app).post('/save-message').send({
      nome: 'teste',
      email: 'testjest@email.com',
      telefone: 'telefoneinvalido',
      mensagem: 'Fazendo teste com jest'
    })

    expect(res.body).toHaveProperty('error')
  })

  it('should test a request in the route /save-message', async () => {
    const res = await supertest(app).post('/save-message').send({
      nome: 'teste',
      email: 'testjest@email.com',
      telefone: '55 81 90000-0000',
      mensagem: 'Fazendo teste com jest'
    })

    console.log(res.body)

    expect(res.body).toHaveProperty('message')
  })
})
