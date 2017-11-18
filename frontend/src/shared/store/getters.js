export default {
  getEvent: state => id => state.events.find(e => e.id === id),
  validateAdmin: state => (id, adminKey) =>
      state.events.find(e => e.id === id && e.adminKey === adminKey),
};
