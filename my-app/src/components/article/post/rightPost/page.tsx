import React from 'react'
import RightPostTag from '@/src/components/article/post/rightPost/tag/page'
import RightPostFollow from '@/src/components/article/post/rightPost/follow/page'
import RightPostCatgeory from '@/src/components/article/post/rightPost/catgeory/page'
import RightPostOwnAds from '@/src/components/article/post/rightPost/ownads/page'

export default function RightPost() {
  return (
    <>
      <RightPostFollow />
      {/* <RightPostOwnAds /> */}
      <RightPostTag />
      <RightPostCatgeory />
    </>
  )
}
