import React from 'react'
import Link from 'next/link'

export default function HeaderUpper(props: { data: string }) {
  return (
    <div className="firstPart">
      <div className={`inner ${props.data}`}>
        Announcing our next round of funding.{' '}
        <Link href="/">
          <span aria-hidden="true" />
          Read more
        </Link>
      </div>
    </div>
  )
}
