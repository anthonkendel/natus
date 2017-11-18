import faker from 'faker';
import Event from '../models/Event';

const fakeEvents = [
  new Event({
    id: faker.random.uuid(),
    adminKey: faker.random.uuid(),
    name: faker.lorem.words(3),
    description: faker.lorem.words(80),
    imageUrl: faker.image.image(),
    startDate: new Date(),
    endDate: new Date(),
    category: faker.lorem.word(),
  }),
  new Event({
    id: faker.random.uuid(),
    adminKey: faker.random.uuid(),
    name: faker.lorem.words(3),
    description: faker.lorem.words(80),
    imageUrl: faker.image.image(),
    startDate: new Date(),
    endDate: new Date(),
    category: faker.lorem.word(),
  }),
  new Event({
    id: faker.random.uuid(),
    adminKey: faker.random.uuid(),
    name: faker.lorem.words(3),
    description: faker.lorem.words(80),
    imageUrl: faker.image.image(),
    startDate: new Date(),
    endDate: new Date(),
    category: faker.lorem.word(),
  }),
];


export default {
  events: fakeEvents,
};
