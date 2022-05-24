import type { Benefit } from '../types/benefit'
import { MdOutlinePayment, MdOutlineHealthAndSafety, MdOutlineLocationCity } from 'react-icons/md'
import { RiMoneyEuroCircleFill } from 'react-icons/ri'

const benefits: Benefit[] = [
  {
    icon: <RiMoneyEuroCircleFill />,
    name: 'Get Best Prices',
    desc: 'Pay through our application and save thousands and get amazing rewards.',
  },
  {
    icon: <MdOutlineHealthAndSafety />,
    name: 'Covid Safe',
    desc: 'We have all the curated hotels that have all the precaution for a covid safe environment.',
  },
  {
    icon: <MdOutlinePayment />,
    name: 'Flexible Payment',
    desc: 'Enjoy the flexible payment through our app and get rewards on every payment.',
  },
  {
    icon: <MdOutlineLocationCity />,
    name: 'Find The Best Near You',
    desc: 'Find the best hotels and places to visit near you in a single click',
  },
]

export { benefits }
