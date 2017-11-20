export default {
  createEvent(state, event) {
    state.events.push(event);
  },
  updateEvent(state, event) {
    const index = state.events.map(e => e).indexOf(event.id);
    if (index >= 0) {
      state.events[index] = event;
    }
  },
};
