import supertest from 'supertest'
import app from '../../app'

describe('Testing useCase GetInstitutionBankingInformation', () => {
  it('should test a request in the route /institution-information/:id with NaN id', async () => {
    const res = await supertest(app).get('/institution-information/id-NaN')

    expect(res.body).toHaveProperty('error')
  })

  it('should test a request in the route /institution-information/:id with invalid id', async () => {
    const res = await supertest(app).get('/institution-information/1242435323452')

    expect(res.body).toHaveProperty('error')
  })
})
