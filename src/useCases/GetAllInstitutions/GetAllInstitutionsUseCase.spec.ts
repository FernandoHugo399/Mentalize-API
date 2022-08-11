import supertest from 'supertest'
import app from '../../app'

describe('Testing useCase GetAllInstitutions', () => {
  it('should test a request in the route /institutions', async () => {
    const res = await supertest(app).get('/institutions')

    expect(res.body).toHaveProperty('institutions')
  })
})
