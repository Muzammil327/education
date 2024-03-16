export interface optiondata {
  option: string
  optionIndex: number
}

export interface option {
  correct: string
  id: number
  name: string
  options: optiondata[]
}

export interface subtitle {
  id: number
  title: string
  href: string
}

export interface CardDataType {
  id: number
  title: string
  description: string
  href: string
  image: string
  subtitle?: subtitle[]
}
