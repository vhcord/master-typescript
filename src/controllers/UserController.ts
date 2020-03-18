import { Request, Response } from 'express'
const users = [{ name: 'Victor Cordeiro', email: 'victor.cordeiro@gmail.com' }]
export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  }
}
