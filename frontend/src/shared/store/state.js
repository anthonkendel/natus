import Event from '../models/Event';

export default {
  events: [
    new Event(
      1,
      'Donec ultrices tincidunt',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
      'et dolore magna aliqua. Interdum consectetur libero id faucibus. ' +
      'Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet.',
      'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
      new Date().toDateString(),
      new Date().toDateString(),
      'test',
    ),
    new Event(
      2,
      'Donec ultrices tincidunt',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
      'et dolore magna aliqua. Interdum consectetur libero id faucibus. ' +
      'Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet.',
      'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
      new Date().toDateString(),
      new Date().toDateString(),
      'test',
    ),
  ],
};
