import multer from 'multer'

class Multer {
  private multer = multer({ storage: multer.memoryStorage() })

  public uploadSingle (fileName: string) {
    return this.multer.single(fileName)
  }
}
export default new Multer()
