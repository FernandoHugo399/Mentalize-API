import supertest from 'supertest'
import app from '../../app'

describe('Testing useCase GetOneInstitution', () => {
  it('should test a request in the route /institution/:id with NaN id', async () => {
    const res = await supertest(app).get('/institution/id-NaN')

    expect(res.body).toHaveProperty('error')
  })

  it('should test a request in the route /institution/:id with invalid id', async () => {
    const res = await supertest(app).get('/institution/1242435323452')

    expect(res.body).toHaveProperty('error')
  })
})
