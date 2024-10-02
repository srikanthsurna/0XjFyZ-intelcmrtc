import { Cron, CronFunction } from './internal'

class Service {
  private cron = new Cron()

  registerJob(schedule: string, cronFunction: CronFunction): void {
    return this.cron.registerJob(schedule, cronFunction)
  }
}

class Singleton {
  static service = new Service()
}

export const CronService = Singleton.service
