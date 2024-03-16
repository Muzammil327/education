import React from 'react'
import PostCard from '@/src/components/article/post/card/page'
import PostMetadata from '@/src/components/article/post/PostMetadata/page'
import { Article } from '@/src/types/article/page'

export default function LeftPost() {
  const postMetadata = PostMetadata()

  return (
    <>
      <div className="grid grid-cols-1 my-20 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {postMetadata.slice(11, 18).map((data: Article) => (
          <div key={data.id}>
            <PostCard datas={data} key={data.id} />
          </div>
        ))}
      </div>
    </>
  )
}
