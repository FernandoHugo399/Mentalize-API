import { IGoogleCLoudStorageProvider } from './../IGoogleCloudStorage'
import { Bucket, Storage } from '@google-cloud/storage'
import path from 'path'
import internal from 'stream'

export class GoogleCloudProvider implements IGoogleCLoudStorageProvider {
  private bucket: Bucket
  private projectId = process.env.GCLOUD_ID
  private bucketName = this.projectId + '.appspot.com'

  constructor () {
    const gcs = new Storage({
      projectId: this.projectId,
      keyFilename: path.join(__dirname, '..', '..', 'config', 'service-account.json')
    })
    this.bucket = gcs.bucket(this.bucketName)
  }

  public getBlobStream (file: Express.Multer.File, dateNowToStringSubstring10: string): internal.Writable {
    const blob = this.bucket.file(dateNowToStringSubstring10 + file.originalname)
    const blobStream = blob.createWriteStream()
    return blobStream
  }
}
