'use client'
import React from 'react'
import { saveAs } from 'file-saver'

interface FileDownloaderProps {
  fileId: string
  fileName: string
}

const FileDownloader: React.FC<FileDownloaderProps> = ({
  fileId,
  fileName,
}) => {
  const saveFile = () => {
    // Example PDF file URL
    const pdfUrl = `${fileId}`
    // Use fetch to get the PDF file as a Blob
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Use file-saver to save the Blob as a file
        saveAs(blob, `${fileName}`) // Change the second parameter to set the filename
      })
      .catch((error) => {
        console.error('Error downloading PDF:', error)
      })
  }

  return (
    <button
      onClick={saveFile}
      className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full my-8`}
    >
      Download
    </button>
  )
}

export default FileDownloader
