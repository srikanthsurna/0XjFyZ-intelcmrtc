import { Nango, ProxyConfiguration } from '@nangohq/node'
import { AxiosResponse } from 'axios'

export class NangoApi {
  private api: Nango

  constructor() {
    this.initialize()
  }

  private initialize(): void {
    try {
      const apiKey = process.env.SERVER_NANGO_SECRET_KEY

      const publicKey = process.env.NEXT_PUBLIC_NANGO_KEY

      if (!apiKey || !publicKey) {
        console.log(
          `Set SERVER_NANGO_SECRET_KEY and NEXT_PUBLIC_NANGO_KEY in your .env to activate Nango`,
        )
        return
      }

      this.api = new Nango({ secretKey: process.env.SERVER_NANGO_SECRET_KEY })

      console.log(`Nango is active`)
    } catch (error) {
      console.error(`Nango failed to start`)
    }
  }

  isActive(): boolean {
    if (this.api) {
      return true
    } else {
      return false
    }
  }

  async proxy(config: ProxyConfiguration): Promise<AxiosResponse<any, any>> {
    return this.api.proxy(config)
  }
}
