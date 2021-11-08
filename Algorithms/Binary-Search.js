
/* Given a time in hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.  */


let time = '07:05:45PM';

function timeConversion(s) {
  // Write your code here
  if(s.includes('AM')){
      if(s.slice(0,2) == 12){
          return '00:' + s.slice(3,8);
      } else {
          return s.slice(0,8);
      }
  }
  if(s.includes('PM')){
      if(s.slice(0,2) == 12){
          return s.slice(0,8)
      } else {
          let intHr = parseInt(s.slice(0, 2), 10);
          let aftHr = intHr + 12;
          return aftHr.toString() + s.slice(2, 8);
      }   
  }
}

console.log(timeConversion(time));