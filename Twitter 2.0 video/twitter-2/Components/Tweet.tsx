import { Tweet, Comment } from '@/typings'
import React, { useEffect, useState } from 'react'
import TimeAgo from 'react-timeago'
import {
    HeartIcon,
    ChatBubbleOvalLeftIcon,
    ArrowPathRoundedSquareIcon,
    ChartBarIcon
} from '@heroicons/react/24/outline'
import { fetchComments } from '@/Utility/fetchComments'

interface Props {
    tweet: Tweet
}

function Tweet({ tweet }: Props) {
    const [comments, setComments] = useState<Comment[]>([])

    const refreshComments = async () => {
        const comments: Comment[] = await fetchComments(tweet._id)
        setComments(comments);
    }

    useEffect(() => {
        refreshComments();
    }, [])

    console.log(comments)

  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-800">
        <div className="flex space-x-3">
            <img src={tweet.profileImg} alt='' className = "h-10 w-10 rounded-full object-cover" />
            <div>
            <div className="flex items-center space-x-1">
                <p className="mr-1 font-bold">{tweet.username}</p>
                <p className="hidden sm:inline text-gray-500 text-sm">@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>
                <p className="text-gray-500">·</p>
                <TimeAgo
                className="text-sm text-gray-500"
                date={(tweet._createdAt)} />
            </div>
            <p className="pt-1">{tweet.text}</p>
            {tweet.image && 
            <img src={tweet.image} alt="" className="m-5 ml-0 mb-1 h-60 rounded-3xl object-cover shadow-sm"/> }
            </div>
        </div>

        <div className="flex mt-5 justify-between">
            <div className='flex cursor-pointer items-center space-x-3 text-gray-600'>
                <ChatBubbleOvalLeftIcon className="h-5 w-5 hover:text-twitter hover:bg-gray-800 rounded-xl" />
                <p>{comments.length}</p>
            </div>
            <div className='flex cursor-pointer items-center space-x-3 text-gray-600'>
                <ArrowPathRoundedSquareIcon className="h-5 w-5 hover:text-green-400 hover:bg-gray-800 rounded-xl" />
                <p></p>
            </div>
            <div className='flex cursor-pointer items-center space-x-3 text-gray-600'>
                <HeartIcon className="h-5 w-5 hover:text-red-400 hover:bg-gray-800 rounded-xl" />
                <p></p>
            </div>
            <div className='flex cursor-pointer items-center space-x-3 text-gray-600'>
                <ChartBarIcon className="h-5 w-5 hover:text-twitter hover:bg-gray-800 rounded-xl" />
                <p></p>
            </div>
        </div>

        {comments?.length > 0 && (
            <div className="my-2 mt-5 max-h-44 space-y-5 hover:overflow-y-auto border-t border-gray-800 p-5">
                {comments.map((comment) => (
                    <div key={comment._id} className="flex relative space-x-2">
                        <hr className='absolute left-5 top-10 h-8 border-x border-gray-800' />
                        <img src={comment.profileImg} className=' mt-2 h-7 w-7 object-cover rounded-full' alt="" />
                        <div>
                            <div className="flex items-center space-x-1">
                                <p className="mr-1 font-bold">{comment.username}</p>
                                <p className="hidden lg:inline text-gray-500 text-sm">@{comment.username.replace(/\s+/g, '').toLowerCase()} ·</p>
                                
                                <TimeAgo
                                className="text-sm text-gray-500"
                                date={(comment._createdAt)} />
                            </div>
                            <p>{comment.comment}</p>
                        </div>
                    </div>
                ))}
        </div>
            
        )}
    </div>
  )
}

export default Tweet