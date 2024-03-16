import { easeOut, motion, useTime, useTransform } from 'framer-motion'

export default function ChapterSkeleton() {
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
    <motion.div className="my-9" style={{ opacity: pulseOpacity }}>
      <h2 className="h-4 w-7/12 mb-2 relative bg-gray-200" />
      <ul className="">
        {[1, 2, 3, 4].map((_, index) => (
          <li key={index} className="h-5 my-3 w-4/12 relative bg-gray-200" />
        ))}
      </ul>
    </motion.div>
  )
}
