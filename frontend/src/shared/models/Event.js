export default class Event {
  constructor(id, name, desc, imageURL, startDate, endDate, category) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.imageURL = imageURL;
    this.startDate = startDate;
    this.endDate = endDate;
    this.category = category;
  }
}
