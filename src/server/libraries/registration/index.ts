import { Database } from '../../../core/database'

class Service {
  /**
   * This function is called when a new user sign up, you can use it to send welcome email for ex
   */
  async onRegistration(userId: string) {
    const database = await Database.getUnprotected()

    const user = await database.user.findUnique({
      where: { id: userId },
    })

    if (!user) {
      return
    }
  }
}

class Singleton {
  static service = new Service()
}

export const RegistrationService = Singleton.service
