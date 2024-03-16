import { easeOut, motion, useTime, useTransform } from 'framer-motion'

export default function Page() {
  const time = useTime()
  const pulseOpacity = useTransform(
    time,
    [0, 1000, 2000, 3000, 4000, 5000],
    [1, 0, 1, 0, 1, 0],
    {
      ease: easeOut,
    }
  )

  return (
    <motion.div className="border-y px-5 pt-5 pb-[19px]" style={{ opacity: pulseOpacity }}>
      <h2 className="h-8 w-7/12 mb-8 relative bg-gray-200" />
      <ul className="">
        {[1, 2, 3, 4].map((_, index) => (
          <li key={index} className="h-12 my-4 w-full relative bg-gray-200" />
        ))}
      </ul>
    </motion.div>
  )
}
