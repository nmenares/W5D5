class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // // 3. Call printTime.
    this.printTime();
    // // 4. Schedule the tick at 1 second intervals.  
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    var timestring = `${this.hours}:${this.minutes}:${this.seconds}`;
    // Use console.log to print it.
    console.log(timestring);
  }

  _tick() {
    // 1. Increment the time by one second.
    // this.seconds = this.extrazero(this.seconds);
    // this.minutes = this.extrazero(this.minutes); 
    // this.hours = this.extrazero(this.hours);
      
    this.seconds = this.extrazero(parseInt(this.seconds) + 1);
    
    if(this.seconds === 60) {
      this.seconds = this.extrazero(0);
      this.minutes = this.extrazero(parseInt(this.minutes) + 1);
      this.minutes = this.extrazero(this.minutes);
      if(this.minutes === 60) {
        this.minutes = 0;
        this.hours = this.extrazero(parseInt(this.hours) + 1);
        this.hours = this.extrazero(this.minutes);
        if(this.hours === 24) {
        this.hours = 0;
        }
      }
    }
    
    this.printTime();

  }
  
  extrazero(num) {
    if(parseInt(num, 10) < 10) {
      num = "0" + parseInt(num, 10);
      return num;
    } else {
      return parseInt(num, 10);
    } 
  }
}

const clock = new Clock();


// setInterval(callback, delay[, ...args])