import Header from '@/src/components/layout/header/page'
import SubHeader from '@/src/components/layout/header/subheader/page'
import QuizBookSection from '@/src/components/quiz/book/page'

export default function QuizView() {
  return (
    <>
      <SubHeader title="Quiz Book" />
      <QuizBookSection />
    </>
  )
}
