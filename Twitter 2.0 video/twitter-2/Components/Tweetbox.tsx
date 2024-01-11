'use client'
import React, { useState } from 'react'
import{
    CalendarIcon,
    FaceSmileIcon,
    MapPinIcon,
    PhotoIcon,
    GifIcon,
    ListBulletIcon
} from '@heroicons/react/24/outline'

function Tweetbox() {
    const [input, setInput] = useState<string>('')

  return (
    <div className="flex space-x-2 p-5">
        <img className='h-14 w-14 object-cover rounded-full mt-4' 
        src="https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png"
        alt="" />

        <div className='flex flex-1 item-center pl-2'>
            <form className='flex flex-1 flex-col'>
                <input
                value={input}
                onChange={e => setInput(e.target.value)}
                 type="text" placeholder="What is happening?!" className="h-24 w-full text-xl outline-none bg-transparent placeholder:text-xl" />
                <div className="flex items-center justify-between">
                    <div className="flex flex-1 space-x-2 text-twitter">
                        {/* Icons */}
                        <PhotoIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                        <GifIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                        <ListBulletIcon className="h-5 w-5 hidden md:inline cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                        <FaceSmileIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                        <CalendarIcon className="h-5 w-5 hidden md:inline cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                        <MapPinIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                    </div>
                    <button disabled={!input} className=' bg-twitter px-5 py-2 font-bold rounded-full hover:bg-blue-500 active:bg-blue-600 disabled:opacity-40'>
                        Post
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Tweetbox