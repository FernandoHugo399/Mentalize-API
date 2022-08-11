import { IMailProvider, IMessage } from '../IMailProvider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import dotenv from 'dotenv'
dotenv.config()

export class MailProvider implements IMailProvider {
    private transporter: Mail

    constructor () {
      this.transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT as unknown as number,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      })
    }

    async sendMail (message: IMessage): Promise<void> {
      await this.transporter.sendMail({
        to: {
          name: message.to.name,
          address: message.to.email
        },
        from: {
          name: message.from.name,
          address: message.from.email
        },
        subject: message.subject,
        html: message.body
      })
    }
}
