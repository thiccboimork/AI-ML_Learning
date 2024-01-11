import Feed from '@/Components/Feed'
import Sidebar from '@/Components/Sidebar'
import Widgets from '@/Components/Widgets'
import Image from 'next/image'
import type { GetServerSideProps } from 'next'
import { fetchTweets } from '../Utility/fetchTweets'
import React from 'react'
import RootLayout from '@/Components/RootLayout'
import { Tweet } from '@/typings'
import toast, { Toaster } from 'react-hot-toast'

interface Props {
  tweets: Tweet[]
}

const Home = ({ tweets }: Props) => {
  <Toaster />
  return (
    <RootLayout>
    <div className="lg:max-w-7xl max-h-screen overflow-hidden mx-auto">

      <main className="grid grid-cols-9">
        <Sidebar />

        <Feed tweets={tweets}/>

        <Widgets />
      </main>

    </div>
    </RootLayout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets,
    }
  }
}