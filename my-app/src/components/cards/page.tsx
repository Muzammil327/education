import ImageComponent from '@/src/components/elements/image/page'
import ButtonWithLoader from '@/src/components/elements/button/page'

export default function Card(props: {
  title: string
  description: string
  href: string
  image: string
}) {
  return (
    <>
      <div className="cards">
        <div className="image">
          <ImageComponent
            src={props.image}
            alt={props.title}
            height={1260}
            width={2240}
          />
        </div>
        <div className="text">
          <div className="head">
            <h5>{props.title}</h5>
          </div>
          <p>{props.description}</p>
          <ButtonWithLoader href={props.href} className="w-full">
            Click Here
          </ButtonWithLoader>
        </div>
      </div>
    </>
  )
}
