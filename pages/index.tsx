import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
// import Image from 'next/image'

const Home: NextPage = () => {
  const posts = [
    { title: 'React Testing', excerpt: 'Learn React Testing' },
    { title: 'React Course', excerpt: 'Learn React Course' },
  ]
  return (
    <div className="container mx-auto mb-8 bg-gray-100 px-10 ">
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title}/>
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget/>
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
