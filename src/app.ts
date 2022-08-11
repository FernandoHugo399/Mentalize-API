import 'dotenv/config'
import { db } from './database/index'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { router } from './routes'
import morgan from 'morgan'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
      this.database()
    }

    private middlewares (): void {
      this.express.use(morgan('dev'))
      this.express.use(express.json())
      this.express.use(bodyParser.urlencoded({ extended: false }))
      this.express.use(bodyParser.json())
      this.express.use(cors({
        origin: '*'
      }))
    }

    private routes (): void {
      this.express.use(router)
    }

    private database (): void {
      db.connect()
        .then(() => console.log('Conectado ao postgres'))
        .catch(err => console.log(err))
    }
}

export default new App().express
