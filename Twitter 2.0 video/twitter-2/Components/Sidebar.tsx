import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    DocumentTextIcon,
    EllipsisHorizontalCircleIcon,
    EnvelopeIcon,
    UserIcon,
    HomeIcon,
} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'
import { signIn, signOut, useSession } from 'next-auth/react'

{/* from website heroicons.com, this is just the twitter icons */}

function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className='flex flex-col col-span-2 px-4 py-3 items-center md:items-start'>
        <img className="m-3 w-10 h-10"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBByn_924TvWcHRha6cO1rY3y2YuF2yyr0w&usqp=CAU" 
        alt="" />
        {/* twitter icon */}

        <SidebarRow Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={HashtagIcon} title="Explore" />
        <SidebarRow Icon={BellIcon} title="Notifications" />
        <SidebarRow Icon={EnvelopeIcon} title="Messages" />
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
        <SidebarRow Icon={DocumentTextIcon} title="Lists" />
        <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? 'Sign Out' : 'Sign In'} />
        <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
        {/* all sidebar icons */}
    </div>
  )
}

export default Sidebar