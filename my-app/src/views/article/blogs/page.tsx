import React from 'react'
import PostMetadata from '@/src/components/article/post/PostMetadata/page'
import { Article } from '@/src/types/article/page'
import Container from '@/src/components/elements/container/page'
import PostCard from '@/src/components/article/post/card/page'
import SubHeader from '@/src/components/layout/header/subheader/page'

export default function ViewPost() {
  const postMetadata = PostMetadata()
  return (
    <>
      <SubHeader title="Blogs Post" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-20">
          {postMetadata.splice(0, 9).map((data: Article) => (
            <PostCard datas={data} key={data.id} />
          ))}
        </div>
      </Container>
    </>
  )
}
