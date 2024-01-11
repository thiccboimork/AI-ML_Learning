import{ createClient } from 'next-sanity'
  
  export const config = {
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
    projectId: process.env.SANITY_STUDIO_PROJEcT_ID,
    apiVersion: '2024-01-06',
    useCdn: process.env.NODE_ENV === 'production',
  }

  export const sanityClient = createClient(config)
  