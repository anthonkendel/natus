export default {
  createEvent(state, event) {
    state.events.push(event);
  },
  saveEvent(state, event) {
    state.events = state.events[state.events.map(e => e).indexOf(event.id)];
  },
};
