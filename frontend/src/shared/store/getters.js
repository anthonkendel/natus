export default {
  getEvent: state => id => state.events.find(e => e.id === id),
};
