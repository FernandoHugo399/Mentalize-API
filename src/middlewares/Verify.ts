/* eslint-disable camelcase */
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

interface request extends Request{
    id_usuario?: string
    email?: string
}

interface jwtPayload extends jwt.JwtPayload {
    id_usuario: string
    email: string
}

class AuthVerify {
  public async AuthVerify (req: request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.authorization
      if (!authHeader) {
        throw new Error('Nenhum token recebido')
      }

      const verifyToken: jwtPayload = jwt.verify(authHeader, process.env.SECRET_JWT as string) as jwtPayload
      req.id_usuario = verifyToken.id_usuario
      req.email = verifyToken.email

      return next()
    } catch (err) {
      return res.status(200).send({ authError: 'Token inválido', error: err.message })
    }
  }
}

export default new AuthVerify()
