import { ArrowPathIcon } from "@heroicons/react/24/outline"
import React, { useState } from 'react'
import Tweetbox from "./Tweetbox"
import { Tweet } from "@/typings"
import TweetComponent from '../Components/Tweet'
import { fetchTweets } from "@/Utility/fetchTweets"
import toast, { Toaster } from "react-hot-toast"

interface Props {
  tweets: Tweet[]
}

function Feed({ tweets: tweetsProp }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp)
  console.log(tweets)

  const handleRefresh = async () => {
    <Toaster />
    const refreshToast = toast.loading('Refreshing...')

    const tweets = await fetchTweets()
    setTweets(tweets)

    toast.success('Feed Updated!', {
      id: refreshToast,
    })
  }

  return (
    <div className="col-span-7 lg:col-span-5 border-x border-gray-600">
        <div className="flex items-center justify-between border-y border-gray-600">
            <h1 className="p-5 py-2 pb-0 text-xl font-bold ">Home</h1>
            <ArrowPathIcon 
            onClick={handleRefresh}
            className='h-12 w-20 mr-5 mt-4 p-2
            cursor-pointer text-twitter transition-all duration-500 ease-out
            hover:rotate-180 active:scale-125' />
        </div>

        {/* Tweetbox */}
        <div> 
            <Tweetbox />
        </div>

        <div>
          {tweets.map(tweet => (
            <TweetComponent key={tweet._id} tweet={tweet} />
          ))}
        </div>
    </div>
  )
}
{/*import {visionTool} from '@sanity/vision'*/}
export default Feed