# Integration with Nango

The codebase already includes a complete integration with Nango router/hooks that you can call from the front-end to integrate the application with 250+ applications like Notion, Google drive, etc.. You don't have to create the OAuth you can just call nango.auth to authenticate and the api.nango.proxy to fetch the data.

## Authenticate with the integration

```tsx
import { Api } from '@/core/trpc'
import { useNango } from '@/core/hooks/nango'

const { nango } = useNango()

const authenticate = async () => {
  nango
    .auth('google-calendar', user?.id) // replace with the relevant integration
    .then(async result => {
      enqueueSnackbar('Integration linked successfully.', {
        variant: 'success',
      })
    })
    .catch(error => {
      enqueueSnackbar('Error linking integration ' + error, {
        variant: 'error',
      })
    })
}
```

## Interact with the integration

```tsx
import { Api } from '@/core/trpc'

const { mutateAsync: nangoProxy } = Api.nango.proxy.useMutation()

const fetchData = async () => {
  const config = {
    method: 'GET',
    endpoint: 'https://www.googleapis.com/calendar/v3/calendars/primary/events',
    providerConfigKey: 'google-calendar',
    connectionId: user?.id,
  } // replace with relevant config

  try {
    const { data } = await nangoProxy(config)
    enqueueSnackbar('Integration added successfully', { variant: 'success' })
    refetch()
  } catch (error) {
    enqueueSnackbar('Failed to add integration', { variant: 'error' })
  }
}
```
