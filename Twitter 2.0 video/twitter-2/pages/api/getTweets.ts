import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Tweet } from '../../typings'
import { groq } from 'next-sanity'


const feedQuery = groq`
    *[_type == "tweet" && !blockTweet] {
    _id,
    ...
  } | order(_createdAt desc)
`

type Data = {
    tweets: Tweet[]
}

export default async function handler(
    reg: NextApiRequest,
    res: NextApiResponse<Data>
) {
 
    const tweets: Tweet[] = await sanityClient.fetch(feedQuery)

    res.status(200).json({ tweets })
}