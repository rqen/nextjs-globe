
import { AnimatePresence, motion, useIsPresent, animate } from 'framer-motion'

const outboundItems = [
  { id: 1, title: 'LinkedIn', href: 'https://www.linkedin.com/in/christian-r%C3%B8en-hansen-121b696' },
  { id: 2, title: 'Codepen', href: 'https://codepen.io/rqendotcom/' },
  { id: 3, title: 'Github', href: 'https://github.com/rqen' },
  { id: 4, title: 'Twitter', href: 'https://twitter.com/rqen' },
]

const OutboundItem = ({ children }) => {
  const isPresent = useIsPresent();
  const animations = {
    style: {
      position: isPresent ? 'static' : 'absolute'
    },
    initial: { scale: 0.5, opacity: 0, x: -25 },
    animate: { scale: 1, opacity: 1, x: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: 'spring', delay: 3.2 + children.id * 0.2, stiffness: 200, damping: 40 }
  }
  return (
    <motion.li {...animations} layout>
      <a href={children.href}>{children.title}</a>
    </motion.li>
  )
}

export default function OutboundItems() {
  return (
    <div className='outbound-content'>
      <ul className="outbound-list">
        <AnimatePresence>
          {[...outboundItems].map((item) => (
            <OutboundItem key={item.id}>
              {item}
            </OutboundItem>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
}