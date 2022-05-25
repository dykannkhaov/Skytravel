import type { Airport } from '../types/airport'
import { faker } from '@faker-js/faker'

const airports: Airport[] = [
  { name: 'Paris (CDG)', country: 'France', id: faker.datatype.number() },
  { name: 'London (LHR)', country: 'United Kingdom', id: faker.datatype.number() },
  { name: 'Munich (MUC)', country: 'Germany', id: faker.datatype.number() },
  { name: 'New York (JFK) ', country: 'United States', id: faker.datatype.number() },
  { name: 'Tokyo (HND)', country: 'Japan', id: faker.datatype.number() },
  { name: 'Seoul (INC)', country: 'South Korea', id: faker.datatype.number() },
  { name: 'Copenhague (CPH)', country: 'Denmark', id: faker.datatype.number() },
  { name: 'Pékin (PEK)', country: 'China', id: faker.datatype.number() },
  { name: 'Helsinki (HEL) ', country: 'Finland', id: faker.datatype.number() },
  { name: 'Venise (VCE)', country: 'Italy', id: faker.datatype.number() },
]

export { airports }
