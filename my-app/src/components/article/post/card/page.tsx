import React from 'react'
import Link from 'next/link'
import { Article } from '@/src/types/article/page'
import ImageComponent from '@/src/components/elements/image/page'

interface Iprops {
  datas: Article
}

export default function PostCard({ datas }: Iprops) {
  return (
    <div className="postcard">
      <div className="img">
        <ImageComponent src="/h.png" alt="hjkh" width={500} height={500} />
        <div className="cat">
          <a href={`/catgeory/${datas.catslug}`}>{datas.cat}</a>
        </div>
        <div className="tag">
          <a href={`/tag/${datas.tagslug}`}>{datas.tag}</a>
        </div>
      </div>
      <div className="content">
        <Link href={`/blogs/${datas.slug}`} className="">
          {datas.title}
        </Link>

        <div className="inner">
          <a href={`/author/${datas.authorslug}`}>
            <span>by </span>
            {datas.author}
          </a>
          <span>{datas.date}</span>
        </div>
        <p>{datas.para}</p>
      </div>
    </div>
  )
}
