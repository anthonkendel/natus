import faker from 'faker';
import Event from '../models/Event';

const fakeEvents = [];
for (let i = 0; i <= 6; i++) {
  const event = new Event({
    id: faker.random.uuid(),
    adminKey: faker.random.uuid(),
    name: faker.lorem.words(3),
    description: faker.lorem.paragraph(10),
    imageUrl: faker.image.image(),
    startDate: faker.date.recent(),
    endDate: faker.date.future(),
    category: faker.lorem.word(),
    location: faker.address.city(),
  });
  fakeEvents.push(event);
}

export default {
  events: fakeEvents,
};
