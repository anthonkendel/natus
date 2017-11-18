export default class Event {
  constructor(
    id,
    name,
    desc,
    imageURL,
    startDate,
    endDate,
    category,
    location,
  ) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.imageURL = imageURL;
    this.startDate = startDate;
    this.endDate = endDate;
    this.category = category;
    this.location = location;
  }
}
