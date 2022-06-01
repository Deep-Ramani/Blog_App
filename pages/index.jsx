// import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import Image from 'next/image'
import getPosts from '../services/index'

export default function Home({ 
  posts 
}) {
  // const posts = [
  //   { title: 'React Testing', excerpt: 'Learn React Testing' },
  //   { title: 'React Course', excerpt: 'Learn React Course' },
  // ]
  return (
    <div className="container px-10 mx-auto mb-8 ">
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return{
    props : {posts}
  };
}
