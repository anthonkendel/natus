export default class Event {
  constructor({ id, name, description, imageUrl, startDate, endDate, category, location } = {}) {
    this.id = id || '';
    this.name = name || '';
    this.description = description || '';
    this.imageUrl = imageUrl || '';
    this.startDate = startDate || '';
    this.endDate = endDate || '';
    this.category = category || '';
    this.location = location || '';
  }
}
