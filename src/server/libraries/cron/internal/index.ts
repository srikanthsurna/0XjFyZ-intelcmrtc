import NodeCron from 'node-cron'

export type CronFunction = string | ((now: Date | 'manual' | 'init') => void)

export class Cron {
  constructor() {}

  registerJob(schedule: string, cronFunction: CronFunction): void {
    const isValidSchedule = NodeCron.validate(schedule)

    const isJobRegistered = this.isRegistered(cronFunction)

    if (isJobRegistered) {
      return
    }

    if (!isValidSchedule) {
      throw new Error(
        `Invalid cron schedule ${schedule} for job ${cronFunction.toString()}`,
      )
    }

    NodeCron.schedule(schedule, cronFunction, { name: cronFunction.toString() })
  }

  private isRegistered(cronFunction: CronFunction): boolean {
    const jobs = NodeCron.getTasks()

    return jobs.has(cronFunction.toString())
  }
}
