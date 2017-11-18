export default {
  getEvent: (state, id) => state.events.find(event => event.id === id),
};
