# AI tRPC Api

The codebase already includes a complete AI library router that you can query from the front-end to generate text from a prompt, generate text from a picture, generate pictures from a prompt, generate structured output (JSON), convert audio to text or text to audio.

## Generate text from prompt

```tsx
import { Api } from '@/core/trpc'

const { mutateAsync: generateText } = Api.ai.generateText.useMutation()

const handleGenerateText = async (value: string) => {
  const { answer } = await generateText({
    prompt: `My prompt: ${value}`,
  })
}
```

## Generate text from prompt and picture

```tsx
import { Api } from '@/core/trpc'

const { mutateAsync: generateText } = Api.ai.generateText.useMutation()

const handleGenerateText = async (value: string) => {
  const { answer } = await generateText({
    prompt: `My prompt: ${value}`,
    attachmentUrls: ['https://pictureurl.jpg'],
  })
}
```

## Generate picture from prompt

```tsx
import { Api } from '@/core/trpc'

const { mutateAsync: generateImage } = Api.ai.generateImage.useMutation()

const handleGeneratePicture = async (value: string) => {
  const { url } = await generateImage({
    prompt: `Generate a picture like: ${value}`,
  })
}
```
