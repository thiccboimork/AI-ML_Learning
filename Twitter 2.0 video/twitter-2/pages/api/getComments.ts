import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { Comment } from '../../typings'
import { sanityClient } from '@/sanity';

const commentQuery = groq`
  *[_type == "comment" && references(*[_type == 'tweet' && _id == $tweetId]._id)] | order(_createdAt desc) {
    _id,
    ...
  }
`;

type Data = Comment[];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
 ) {
    const { tweetId } = req.query

    const comments: Comment[] = await sanityClient.fetch(commentQuery, {
        tweetId,
    })

    res.status(200).json(comments)
}