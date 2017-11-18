export default {
  getEvent: (state, id) => {
    return state.events.find(event => event.id === id);
  },
};
