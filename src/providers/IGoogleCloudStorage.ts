import internal from 'stream'

export interface IGoogleCLoudStorageProvider {
    getBlobStream(file: Express.Multer.File, dateToStringSubstring10: string): internal.Writable
}
