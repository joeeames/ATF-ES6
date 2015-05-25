
export class Course {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.schedule = [];
  }
  addTime(day, time) {
    // look!  Another good use of destructuring!!!
    this.schedule.push({day,time});
  }
  
}

export let Max = 35;