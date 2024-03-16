interface Image {
  url: string
  alt: string
}

// Define a type for the open graph metadata
interface OpenGraph {
  title: string
  description: string
  url: string
  images: Image[]
}

// Define a type for the robots metadata
interface Robots {
  index: string
  follow: string
  googleBot: {
    index: string
    follow: string
  }
}

// Define a type for the Twitter metadata
interface Twitter {
  title: string
  description: string
  images: Image
}

// Define the main metadata type that encompasses all metadata properties
interface Metadata {
  title: string
  description: string
  keywords: string[]
  openGraph: OpenGraph
  alternates: {
    canonical: string
  }
  robots: Robots
  twitter: Twitter
}
