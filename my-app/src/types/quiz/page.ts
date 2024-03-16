export interface Mcq {
  id: number
  question: string
  book: string
  heading1: string
  heading2: string
  tags: string[]
  description: string
  option1: string
  option2: string
  option3: string
  option4: string
  correctoption?: string
  image?: string
}
