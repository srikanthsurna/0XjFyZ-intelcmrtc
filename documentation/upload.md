# Upload Api

The codebase already includes a complete upload hooks library that you can call from the front-end to upload files or pictures.

## Upload a file

```tsx
import { useUploadPublic } from '@/core/hooks/upload'

const { mutateAsync: upload } = useUploadPublic()

const handleUpload = async file => {
  const { url } = await upload({ file: file })
}
```
