import type { Review } from '../types/review'
import { faker } from '@faker-js/faker'

const reviews: Review[] = [
  {
    name: 'Roberto Bergnaum',
    initials: 'RB',
    desc: 'Very easy to deal with, will consider booking with Skytravel again.',
    id: faker.datatype.number(),
    avatarColors: 'bg-blue-600',
  },
  {
    name: 'Tyler Harris',
    initials: 'TH',
    desc: 'Thanks very much, always a seamless stay. Your service is great and much appreciated.',
    id: faker.datatype.number(),
    avatarColors: 'bg-green-500',
  },
  {
    name: 'Sophia Erdman',
    initials: 'SE',
    desc: 'Always great service, look forward to booking my next trip with you soon.',
    id: faker.datatype.number(),
    avatarColors: 'bg-pink-500',
  },
]

export { reviews }
