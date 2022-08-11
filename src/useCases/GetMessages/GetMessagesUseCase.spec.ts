import supertest from 'supertest'
import app from '../../app'

describe('Testing useCase GetMessages', () => {
  it('should test a request in the route /messages', async () => {
    const res = await supertest(app).get('/messages')

    expect(res.body).toHaveProperty('messages')
  })
})
