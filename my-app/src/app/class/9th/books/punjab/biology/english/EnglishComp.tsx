import React from 'react'
import FileDownloader from '@/src/components/elements/FileDownloader/page'

export default function EnglishComp() {
  const fileName = 'class-9-punjab-board-biology-book-english-medium.pdf'
  const fileId = './class-9-punjab-board-biology-book-english-medium.pdf'
  return (
    <>
      <iframe
        src="https://drive.google.com/file/d/1F24QG0BJ0mLsu3PBgLEM7sBcqPovhYk0/preview"
        allow="autoplay"
        allowFullScreen
        className="w-full px-2 lg:h-[900px] md:h-[800] h-[600px]"
        height={900}
        width={900}
      ></iframe>
      <FileDownloader fileId={fileId} fileName={fileName} />
    </>
  )
}
