# Email tRPC Api

The codebase already includes a complete email library router that you can call from the front-end to send emails to a specific user.

## Send an email to a user

```tsx
import { Api } from '@/core/trpc'

const { mutateAsync: sendEmail } = Api.email.send.useMutation()

const handleSendEmail = async (value: string) => {
  await sendEmail({
    userId: user?.id,
    subject: 'Email',
    content: 'New email',
  })
}
```

## Send an email to a user using a template

```tsx
import { Api } from '@/core/trpc'

const { mutateAsync: sendEmail } = Api.email.send.useMutation()

const handleSendEmail = async (value: string) => {
  await sendEmail({
    userId: user?.id,
    subject: 'Email',
    templateKey: 'welcome',
  })
}
```

## Create an email template

### 1. Create a new .ts file in /src/server/libraries/email/templates/

```ts
export const NewTemplate = `
  <h2>Hello world!</h2>
<div>
  <p>
    Hello {{name}}
  </p>
</div>
  `.trim()
```

### 2. Add it to the list of templates in /src/server/libraries/email/email.service.ts

```ts
import { NewTemplate } from './templates/newTemplate'

  public templates = {
    resetPassword: TemplateResetPassword,
    verificationCode: TemplateVerificationCode,
    welcome: TemplateWelcome,
    newTemplate: NewTemplate
  }
```

### 3. Use it like that

```tsx
import { Api } from '@/core/trpc'

const { mutateAsync: sendEmail } = Api.email.send.useMutation()

const handleSendEmail = async (value: string) => {
  await sendEmail({
    userId: user?.id,
    subject: 'Email',
    templateKey: 'newTemplate',
  })
}
```
