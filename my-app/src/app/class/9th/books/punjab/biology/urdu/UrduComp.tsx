import React from 'react'
import Container from '@/src/components/elements/container/page'
import FileDownloader from '@/src/components/elements/FileDownloader/page'

export default function EnglishComp() {
  const fileName = 'class-9-punjab-board-biology-book-english-urdu.pdf'
  const fileId = './class-9-punjab-board-biology-book-english-urdu.pdf'
  return (
    <>
      <Container>
        <div className="grid md:grid-cols-7 mt-5 mb-28">
          <div className="md:col-span-5">
            <iframe
              src="https://drive.google.com/file/d/17XRMFAyU5w9M6MDPIuvdHawOhkRgRw5o/preview"
              allow="autoplay"
              allowFullScreen
              className="w-full px-2 lg:h-[900px] md:h-[800] h-[600px]"
              height={900}
              width={900}
            ></iframe>
            <FileDownloader fileId={fileId} fileName={fileName} />
          </div>
          <div className="md:col-span-2"></div>
        </div>
      </Container>
    </>
  )
}
