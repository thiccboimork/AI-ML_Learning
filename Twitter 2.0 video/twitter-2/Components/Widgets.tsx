'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import React from 'react'
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="mt-2 px-2 col-span-2 hidden lg:inline">
        {/* Search */}
        <div className="flex items-center space-x-2 bg-gray-600 p-3 rounded-full mt-2">
            <MagnifyingGlassIcon className="h-5 w-5" />
            <input 
            type="text" 
            placeholder="Search Twitter 2" 
            className=" flex-1 outline-none bg-transparent" 
            />
        </div>

    <TwitterTimelineEmbed
    sourceType="profile"
    screenName="bradtaste"
    options={{height: 1000}}
    />
    </div>
  )
}

export default Widgets