// src/sanityClient.ts
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'n5o9rk0x',       // get this from sanity.config.ts or sanity.io/manage
  dataset: 'production',              // or whatever dataset you're using
  apiVersion: '2024-07-15',           // use today's date or latest
  useCdn: true                        // faster, cacheable — for public content
})

export default client