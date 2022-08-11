import { IMailProvider } from './../../providers/IMailProvider'
import { IMessageRepository } from '../../repositores/IMessageRepository'
import { ISaveMessageDTO } from './SaveMessageDTO'

export class SaveMessageUseCase {
    private mailProvider!: IMailProvider
    private messageRepository!: IMessageRepository

    constructor (MailProvider: IMailProvider, MessageRepository: IMessageRepository) {
      this.mailProvider = MailProvider
      this.messageRepository = MessageRepository
    }

    public async execute (message: ISaveMessageDTO) {
      const { nome, email, telefone, mensagem } = message

      if (!email || !mensagem || !nome || !telefone) throw new Error('Todos os campos não foram preenchidos')

      const Message = this.formatMessage(message)

      if (!Message.telefone) throw new Error('Preencha o campo de telefone em um formato válido!')

      await this.messageRepository.saveMessage(Message)

      await this.mailProvider.sendMail({
        from: {
          email: '40657f960f-5d8abe+1@inbox.mailtrap.io',
          name: 'Hugo Fernando'
        },
        to: {
          email: Message.email,
          name: Message.nome
        },
        subject: 'Olá ' + Message.nome,
        body: '<p>Sua mensagem foi enviada com sucesso</p>'
      })
    }

    private formatMessage (message: ISaveMessageDTO): ISaveMessageDTO {
      const formatedNome = message.nome.trim()
      const formatedEmail = message.email.trim()
      const formatedMensagem = message.mensagem.trim()
      const formatedTelefone = Number(message.telefone.toString().trim().replace(',', '').replace('.', '').replace('-', '').replace(/\s/g, ''))

      const Message = {
        email: formatedEmail,
        mensagem: formatedMensagem,
        nome: formatedNome,
        telefone: formatedTelefone
      }

      return Message
    }
}
